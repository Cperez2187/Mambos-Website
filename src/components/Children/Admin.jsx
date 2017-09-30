/**
|--------------------------------------------------
| Stateful Admin component.
| Displays admin portal.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import { Route }from "react-router-dom";
import Category from './Admin/Category.jsx';
import Tab from './Admin/Tab.jsx';
import helpers from '../utils/helpers.js'
import Form from './Admin/Form.jsx';
import NavBar from './Home/NavBar.jsx';
import Login from './Login.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "appetizer",
      menu: [],
      categories: [],
      updatedDish: {}
    };

    this.getMenu = this.getMenu.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setUpdatedDish = this.setUpdatedDish.bind(this);
    this.filterDishes = this.filterDishes.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
    this.saveDish = this.saveDish.bind(this);
  }

  componentWillMount() {
    this.getMenu();
  }

  // get entire menu and list of distinct categories
  getMenu() {
    helpers.getAllDishes().then((dishes) => {

      // reduce to an array of distinct categories
      let cats = dishes.reduce((a,b) => {
        if(a.indexOf(b.category) === -1)
          a.push(b.category);
        return a;
      }, []);

      // store dishes and categories in state
      this.setState({
        menu: dishes,
        categories: cats
      });
    });
  }

  
  // set state.category
  setCategory(category) {
    this.setState({category: category});
  }

  // set state.updatedDish
  setUpdatedDish(dish) {
    this.setState({updatedDish: dish});
  }

  // returns array of dishes of one category
  filterDishes() {
    return this.state.menu.filter((dish) => {
      return dish.category === this.state.category;
    });
  }

  // call AJAX to save new or updated dish to db
  saveDish(dish) {
    console.log("Saving: ", dish);
    if(dish.id > 0) {
      helpers.updateDish({ 
        name: dish.name,
        description: dish.description,
        price: dish.price,
        category: dish.category
      }, dish.id).then(response => {
        console.log(response);
        console.log('DISH UPDATED');
        this.getMenu();
      })
    } else {
      helpers.addDish({
        name: dish.name,
        description: dish.description,
        price: dish.price,
        category: dish.category
      }).then(response => {
        console.log("DISHED ADDED");
        this.getMenu();
      })
    }
  }

  // call AJAX to delete dish by id
  deleteDish(id) {
    if(confirm("Are you sure you want to delete this dish?")) {
      helpers.deleteDish(id).then((result) => {
        console.log("Deleted dish id:",id);
      });
    }
    this.getMenu();
  }

  render() {
    return (
      <div className="container">
        <div className="admin" id="admin">
        {/*Write code here */}
          <Form dish={this.state.updatedDish} categories={this.state.categories} saveDish={this.saveDish}/> 
          <h1 className="text-center display-3" id="admin-header">Admin Portal <button className="float-right btn btn-lg btn-secondary"><a href='/'>Logout</a></button></h1>
          <div className="admin-tabs text-center">
            <div className="btn-group" data-toggle="buttons">
            {
              this.state.categories.map((category) => {
                return (
                  <Tab category={category} key={category} setCategory={this.setCategory}/>
                ); 
              })
            }
            </div>
          </div>
          <Category category={this.state.category} dishes={this.filterDishes()} setUpdatedDish={this.setUpdatedDish} deleteDish={this.deleteDish}/>
        </div>
      </div>
    );
  }
}