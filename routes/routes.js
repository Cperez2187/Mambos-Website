const Article = require('../models/Menu.js');

module.exports = (app) => {

  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  // This is the route we will send GET requests to retrieve our most recent search data.
  // We will call this route the moment the 'Main' component gets mounted
  app.get("/api", (req, res) => {

  });

  // This is the route we will send POST requests to save each search.
  app.post("/api", (req, res) => {
    console.log("BODY: " + req.body);

  });

  // This is the route we will DELETE requests
  // to delete an article from the database
  app.delete("/api", (req, res) => {
    
  });

};
