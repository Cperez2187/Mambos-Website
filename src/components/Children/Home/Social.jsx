/**
|--------------------------------------------------
| Stateful Social component.
| Displays Instagram feed in ImageRow components.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import ImageRow from './Social/ImageRow.jsx';
import helpers from "../../utils/helpers";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profilePicture: "",
      userLink: "",
      instagram: [],
      primaryImage: {}
    };
  }

  componentWillMount() {
  	helpers.getInstagramFeed().then((feed) => {
  		let arrs = [];

  		let numImages = 12;
  		let rowLength = 4;

  		for(let i = 0; i < numImages; i += rowLength){
			let arr = feed.slice(i, i + rowLength);
			arrs.push(arr);
		}

		this.setState({
			username: feed[0].user.username,
			profilePicture: feed[0].user.profile_picture,
	  		instagram: arrs,
	  		primaryImage: {
	  			url: feed[0].link,
	  			src: feed[0].images.low_resolution.url
	  		}
	  	});
  	});
  }

  changePrimaryImage(link,image) {
  	this.setState({
	  primaryImage: {
	    url: link,
	    src: image
	  }
    });
  }

  render () {
  	return (
  		// <div className="container-fluid">
		    <section className="section-social row justify-content-center" id="section-social">
			    {/*Write code here */}
			  		
			  	<div className="instagram-feed col-md-auto">
			 		{
			 				this.state.instagram.map((imageArr, index) => {
			 					return ( <ImageRow images={imageArr} key={index} changePrimaryImage={this.changePrimaryImage.bind(this)}/> );
			 				})
			 		}
		 		</div>

	 			<figure id="instagram-primary" className="figure col-md-auto">
			    <a href="https://www.instagram.com/mambos_dkitchen/" target="_blank">
					  <figcaption className="figure-caption text-left">
						  	<img src={this.state.profilePicture} className="float-left" />
							  <div className="float-left">
							  	{this.state.username}<br />
							  	Follow us!
					  	  </div>
	  					  <i className="fa fa-instagram fa-3x fa-fw float-right" aria-hidden="true"></i>
					  </figcaption>
				  </a>
				  <div className="text-center figure-img-div">
					  <a href={this.state.primaryImage.url} className="text-center">
					  	<img src={this.state.primaryImage.src} className="figure-img" alt="A generic square placeholder image with rounded corners in a figure." />
					  </a>
				  </div>
				</figure>

		    </section>
	    // </div>
	);
  }
  
}

export default Social;