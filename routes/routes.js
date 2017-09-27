const db = require('../models');

module.exports = (app) => {

  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  // retrieve all dishes of specified category (i.e. appetizers)
  app.get("/api/dishes", (req, res) => {
    if(req.body.category) { // find dishes by category
      db.Dish.findAll({
        where: {
          category: req.body.category
        }
      }).then((result) => {
        res.send(result); 
      });
    } else { // find all dishes
      db.Dish.findAll()
        .then((result) => {
          res.send(result); 
        });
    }
  });

  // insert new dishes item
  app.post("/api/dishes", (req, res) => {
    db.Dish.create(req.body).then((result) => {
      res.send(result); 
    });
  });

  // update dishes item with specified id
  app.put("/api/dishes"), (req, res) => {
    db.Dish.update(req.body,{
      where: {
        id:req.body.id
      }
    }).then((result) => {
      res.send(result); 
    });
  }

  // delete dishes item with specified id
  app.delete("/api/dishes", (req, res) => {
    console.log(req.body);
    db.Dish.destroy({
      where: {
        id: req.body.id
      }
    }).then((result) => {
      res.send(result); 
    });
  });

};
