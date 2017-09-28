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
import Form from './Admin/Form.jsx';

import Login from './Login.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);

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
          <Form category={this.state.category}/>
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
        	<Category category={this.state.category} />
        </div>
      </div>
    );
  }
}