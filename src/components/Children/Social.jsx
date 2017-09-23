/**
|--------------------------------------------------
| Stateless Contact component.
| Displays ContactUs and Map sub components.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'
import axios from 'axios';
import ImageRow from './Social/ImageRow.jsx';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: [],
      primaryImage: {}
    };
  }

  componentDidMount() {

  	// AJAX request to instagram API
    axios.get("https://api.instagram.com/v1/users/self/media/recent", {
    	params: {
    		access_token: "3124545252.1677ed0.40f9e15f60944c48828372ce55095ba2"
    	}
    }).then((response) => {
    	console.log("Instagram AJAX Request\n",response);
    	this.setState({
    		instagram: response.data.data, // store array of images
    		primaryImage: { // store properties of primaryImage
    			url: response.data.data[0].link,
    			caption: response.data.data[0].caption,
    			src: response.data.data[0].images.standard_resolution.url
    		}
    	});
    	console.log("State was set");
    });
  }

  changePrimaryImage(image) {

  }

  render () {

  	let images = [];

  	// splitting images into 4 arrays of 5
  	for(let i = 0; i < this.state.instagram.length; i += 5){
		let arr = this.state.instagram.slice(i, i + 5);
		images.push(arr);
	}

  	return (
	    <section className="section-social row" id="section-social">
		    {/*Write code here */}
		  		
		  	<div className="instagram-feed col-md-8 align-middle">
		 		{
		 				images.map(function(imageArr, index) {
		 					console.log("Images Arrays:",index);
		 					return ( <ImageRow images={imageArr} key={index}/> );
		 				})
		 		}
	 		</div>

 			<figure id="instagram-primary" className="figure col-md-4 pull-right">
			  <a href={this.state.primaryImage.url}>
			  	<img src={this.state.primaryImage.src} className="figure-img img-fluid" alt="A generic square placeholder image with rounded corners in a figure." />
			  </a>
			  <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
			</figure>
	    </section>
	);
  }
  
}

export default Social;