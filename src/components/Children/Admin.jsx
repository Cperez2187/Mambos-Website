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
    this.menu = helpers.getDishes();

    this.dishes = [
      {
        name:"name",
        description: "description",
        price: "price"
      },{
        name:"name",
        description: "description",
        price: "price"
      },{
        name:"name",
        description: "description",
        price: "price"
      },{
        name:"name",
        description: "description",
        price: "price"
      },{
        name:"name",
        description: "description",
        price: "price"
      }
    ];

    this.state = {
      categories: ["appetizer","salad","soup","beef","chicken","pork","seafood"],
      category: "appetizer"
    };
  }

  setCategory(category) {
    this.setState({category: category});
  }

  render() {
    return (
      <div className="container">
        <div className="admin" id="admin">
        {/*Write code here */}
        
          <h1 className="text-center">Admin Portal </h1>
            <Form categories={this.state.categories} />
          <h1 className="text-center display-3">Admin Portal </h1>
          <div className="tabs text-center">
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
          <Category category={this.state.category} dishes={this.dishes} />
        </div>
      </div>
    );
  }
}