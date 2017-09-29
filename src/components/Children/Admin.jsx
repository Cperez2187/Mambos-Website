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
    };
  }

  componentWillMount() {
    this.getMenu();
  }

  // get entire menu and list of distinct categories
  getMenu() {
    helpers.getAllDishes().then((result) => {

      // store array of dishes
      let dishes = result.data;

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

  setCategory(category) {
    this.setState({category: category});
  }

  filterDishes() {
    return this.state.menu.filter((dish) => {
      return dish.category === this.state.category;
    });
  }

  deleteDish(event) {
    let id = $(event.target).attr("data-id");

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
          <Form categories={this.state.categories}/> 
          <h1 className="text-center display-3" id="admin-header">Admin Portal <button className="float-right btn btn-lg btn-secondary">Logout</button></h1>
          <div className="admin-tabs text-center">
            <div className="btn-group" data-toggle="buttons">
            {
              this.state.categories.map((category) => {
                return (
                  <Tab category={category} key={category} setCategory={this.setCategory.bind(this)}/>
                ); 
              })
            }
            </div>
          </div>
          <Category category={this.state.category} dishes={this.filterDishes()} deleteDish={this.deleteDish.bind(this)}/>
        </div>
      </div>
    );
  }
}