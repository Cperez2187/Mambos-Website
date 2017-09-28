/**
|--------------------------------------------------
| Stateful Admin component.
| Displays admin portal.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import { Link, withRouter }from "react-router-dom";
import Category from './Admin/Category.jsx';
import Tab from './Admin/Tab.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["appetizer","salad","soup","beef","chicken","pork","seafood"]
    };
  }

  render() {
    return (
      <div className="container">
      	<div className="admin" id="admin">
        {/*Write code here */}
        	<h1 className="text-center">Admin Portal </h1>
          <div className="tabs text-center">
            {
              this.state.categories.map(function(category) {
                return (
                  <Tab category={category} />
                ); 
              })
            }
          </div>
        	<Category category="appetizer" />
        </div>
      </div>
    );
  }
}