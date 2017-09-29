// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const bcrypt = require('bcrypt');
const passport = require('passport');

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // POST route to add an Admin to the 'Admin' table
    app.post('/api/add-admin', function(req, res) {
        
        // Store password entered
        const passwordEntered = req.body.password;
        // Create salt rounds, used to generate salt for 'bcrypt'
        const saltRounds = 10;
        // Generate a salt and a hash for password, using 'bcrypt'
        bcrypt.hash(passwordEntered, saltRounds).then(passwordHash => {
            // Create and add new employee to database
            db.Admin.create({
                username: req.body.username,
                password: passwordHash, // Store hash in database
                admin: req.body.admin
            }).then(function(data) {
                res.redirect('/admin');
                console.log(data);
                // console.log('SUCCESSSSSS');
            });
        });

    });

    // POST route to validate username and password
    app.post('/api/login', function(req, res) {

        // Store username and password that user entered
        const usernameEntered = req.body.username;
        const passwordEntered = req.body.password;
        console.log(usernameEntered);
        console.log(passwordEntered);

        // Query to find username in database
        db.Admin.findOne({
            where: {
                username: usernameEntered,
            }
        }).then(employee => {
            console.log('Employee: ' + employee);

            // Check if matching username was found in database
            if (employee === null) {
                console.log(`Could not find username '${usernameEntered}' in database.`);
                res.redirect('/login');
            } else {
                // Compare password entered to password stored in database, using 'bcrypt'
                const validPassword = bcrypt.compareSync(passwordEntered, employee.password); // True or False

                if (validPassword) {
                    console.log('UserID: ' + employee.id);
                    req.session.cookie = { maxAge: 5000 };
                    req.login(employee.id, (err) => {
                        console.log('Password is valid! Open Sesame...');
                        res.redirect('/admin');
                    });
                } else {
                    // alert("Fail");
                    console.log('Password does not match');
                    res.redirect('/login');
                }
            }
        });

    });

    // GET route to display 
    app.get('/api/login', function(req, res) {
        db.Admin.findAll({}).then(function(Employee) {
            res.json(Employee);
            // res.redirect('#section-about');
        });
    });

};

// Passport
passport.serializeUser((user_id, done) => {
    done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
    done(null, user_id);
});