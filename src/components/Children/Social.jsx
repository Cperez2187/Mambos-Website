/**
|--------------------------------------------------
| Stateless Contact component.
| Displays ContactUs and Map sub components.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'
import axios from 'axios';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: [],
      primaryImage: {}
    };
  }

  componentWillMount() {
    axios.get("https://api.instagram.com/v1/users/self/media/recent", {
    	params: {
    		access_token: "3124545252.1677ed0.40f9e15f60944c48828372ce55095ba2"
    	}
    }).then((response) => {
    	console.log("Instagram AJAX Request\n",response);
    	this.setState({
    		instagram: response.data.data, 
    		primaryImage: response.data.data[0]
    	});
    	console.log("State was set");
    });
  }

  changePrimaryImage(image) {

  }

  render () {
  	return (
	    <section className="section-social row" id="section-social">
		    {/*Write code here */}
		  		
		  	<div className="instagram-feed col-md-10">
	 		{
	 			this.state.instagram.map(function(image) {
		 			return (
		 				<a href={image.link} key={image.id}>
		 					<img src={image.images.thumbnail.url} className="rounded mx-auto"/>
		 				</a>
		 			);
				})
	 		}
	 		</div>

	 		<div id="instagram-primary col-md-2">
	 			<figure className="figure">
				  <img src={console.log(this.state.primaryImage.images.standard_resolution)} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
				  <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
				</figure>
	 		</div>
	    </section>
	);
  }
  
}

export default Social;