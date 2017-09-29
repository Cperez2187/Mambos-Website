/**
|--------------------------------------------------
| Stateless Tab component.
| Displays one dish.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	category: props.category 
    };
  }

  handleClick() {
  	this.props.setCategory(this.state.category);
  }

  render() {
  	return (
      <button className="btn btn-secondary btn-lg category-tab" id={"tabs-" + this.state.category} onClick={this.handleClick.bind(this)}>
        <input type="radio" name="category" autoComplete="off" /> { this.state.category}
      </button>
  	);
  }
}