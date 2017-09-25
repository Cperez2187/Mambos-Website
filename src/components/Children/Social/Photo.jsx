/**
|--------------------------------------------------
| Stateless Photo component.
| Displays instagram images.
|--------------------------------------------------
*/

import React, { Component } from 'react';

class Photo extends Component {
	constructor(props) {
    super(props);
    this.state = {
      url: props.image.link,
      src: props.image.images.standard_resolution.url,
      thumbnail: props.image.images.thumbnail.url
    };
  }

  handleClick() {
  	this.props.changePrimaryImage(this.state.url,this.state.src)
  }

	render () {
		return (
	  	  <div className="photo">
	        <a onClick={this.handleClick.bind(this)}>
	          <img src={this.state.thumbnail}/>
	        </a>
	      </div>
	  );
	}
}

export default Photo;