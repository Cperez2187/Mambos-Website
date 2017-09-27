/**
|--------------------------------------------------
| Stateful Admin component.
| Displays admin portal.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import { Link, withRouter }from "react-router-dom";
import Category from './Admin/Category.jsx';

import Login from './Login.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
    	<div className="admin" id="admin">
      {/*Write code here */}
      	<h1 className="text-center">Admin Portal </h1>
        <Login />
      	<Category category="appetizer" />
      </div>
    );
  }
}