/**
|--------------------------------------------------
| Stateful Admin component.
| Displays admin portal.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import { Link, withRouter }from "react-router-dom";
import Category from './Admin/Category.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
    	<div className="admin" id="admin">
      {/*Write code here */}
      	<Category category="appetizer" />
      </div>
    );
  }
}