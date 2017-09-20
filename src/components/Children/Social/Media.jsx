/**
|--------------------------------------------------
| Stateful Media component.
| Displays social media feeds and quoted reviews.
|--------------------------------------------------
*/

import React, { Component } from 'react';

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
		<div className="col-md-6 text-center text-div">
      {/*Write code here */}
  		<h1>Social Media</h1>
      <img src="http://lorempixel.com/g/550/550/" />
  	</div>
    );
  }
}