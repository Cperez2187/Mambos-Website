/**
|--------------------------------------------------
| Stateless ContactUs component.
| Displays contact information with social links.
|--------------------------------------------------
*/

import React from 'react';

const ContactUs = () => {
  return (
    <div className="text-div contact pull-left col-md-8" id="contact">
    {/*Write code here */}
    	<div className="container-fluid nopadding">
	    	<h1 className="text-center">Contact Us</h1>
	    	<div className="text-left">
		    	<div className="row justify-content-around ">
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-map-marker fa-3x fa-fw" aria-hidden="true"></i><a href="https://goo.gl/maps/X4Bm7UuSDx32" target="_blank">1950 N Arizona Ave, Suite 8</a></p>
		    		</div>
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-facebook-square fa-3x fa-fw" aria-hidden="true"></i><a href="https://www.facebook.com/MambosKitchenAZ/" target="_blank">Like us on Facebook</a></p>
		    		</div>
		    	</div>
		    	<div className="row justify-content-around">
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-phone fa-3x fa-fw" aria-hidden="true"></i><a href="tel:+14807189210">(480)718-9210</a></p>
		    		</div>
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-instagram fa-3x fa-fw" aria-hidden="true"></i><a href="https://www.instagram.com/mambos_kitchen/" target="_blank">Follow us on Instagram</a></p>
		    		</div>
		    	</div>
		    	<div className="row justify-content-around">
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-paper-plane fa-3x fa-fw" aria-hidden="true"></i><a href="mailto:mambosdominicankitchen@gmail.com">mambosdominicankitchen@gmail.com</a></p>
		    		</div>
		    		<div className="col-md-5">
		    			<p className=""><i className="fa fa-yelp fa-3x fa-fw" aria-hidden="true"></i><a href="https://www.yelp.com/biz/mambos-dominican-kitchen-chandler" target="_blank">Review us on Yelp</a></p>
		    		</div>
		    	</div>
	    	</div>
    	</div>
    </div>
  );
}

export default ContactUs;