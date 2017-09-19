const Menu = require('../models/Menu.js');

module.exports = (app) => {

  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  // retrieve all menu items of specified category (i.e. appetizers)
  app.get("/api/menu", (req, res) => {
    Menu.findAll({
      where: {
        category: req.body.category
      }
    }).then((result) => {
      res.send(result); 
    });
  });

  // insert new menu item
  app.post("/api/menu", (req, res) => {
    Menu.create(req.body).then((result) => {
      res.send(result); 
    });
  });

  // update menu item with specified id
  app.put("/api/menu"), (req, res) => {
    Menu.update({
      //TODO: fill in updateable fields
    },{
      where: {
        id:req.body.id
      }
    }).then((result) => {
      res.send(result); 
    });
  }

  // delete menu item with specified id
  app.delete("/api/menu", (req, res) => {
    Menu.destroy({
      where: {
        id: req.body.id
      }
    }).then((result) => {
      res.send(result); 
    });
  });

};
