// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
const logger = require("morgan");

// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Authentication Packages
var session = require('express-session');
var passport = require('passport');
// var MySQLStore = require('express-mysql-session')(session);
// initalize sequelize with session store
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// -------------------------------------------------
// Initialize Sequelize
const db = require('./models');
// const Sequelize = require('sequelize');

// Static directory
app.use('/static', express.static("public"));

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var sequelize = new db.Sequelize(
  "Mambos",
  "root",
  "", {
      "dialect": "mysql",
      "storage": "./session.mysql"
});

var myStore = new SequelizeStore({
  db: sequelize
});

app.use(cookieParser());  // Possibly not needed for session
app.use(session({
  // key: 'session_cookie_name',
  secret: 'uefewehfybjboi', // could use random string generator
  // store: myStore,
  resave: false,
  saveUninitialized: false, // Only creates cookie for logged in user
  // cookie: { secure: true}  // Only use if using HTTPS
}));

myStore.sync();

app.use(passport.initialize());
app.use(passport.session());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// -----------------------------------------------
// require routes
require('./routes/routes.js')(app);
require('./routes/login-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  })
});
