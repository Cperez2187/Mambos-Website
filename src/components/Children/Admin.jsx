/**
|--------------------------------------------------
| Stateful Admin component.
| Displays admin portal.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import Router, { Link } from "react-router";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }
  render() {
    return (
    	<div className="admin" id="admin">
      {/*Write code here */}
      	<div id="category-tabs">
      		<Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
          <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
      	</div>

      	
      	<Category category="appetizer" />
      </div>
    );
  }
}