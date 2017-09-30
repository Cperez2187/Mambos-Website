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
    	<div className="container-fluid nopadding text-div">
	    	<h1 className="text-center">Contact Us</h1>
	    	<div className="text-left">
		    	<div className="row justify-content-md-center">
		    		<div className="ml-md-auto col-md-5">
		    			<p className="">
		    				<a href="https://goo.gl/maps/X4Bm7UuSDx32" target="_blank">
		    					<i className="fa fa-map-marker fa-3x fa-fw" aria-hidden="true"></i>
		    					1950 N Arizona Ave, Suite 8
		    				</a>
		    			</p>
		    		</div>
		    		<div className="mr-md-auto col-md-4">
		    			<p className="">
		    				<a href="https://www.facebook.com/MambosKitchenAZ/" target="_blank">
		    					<i className="fa fa-facebook-square fa-3x fa-fw" aria-hidden="true"></i>
		    					Like us on Facebook
		    				</a>
		    			</p>
		    		</div>
		    	</div>
		    	<div className="row justify-content-around">
		    		<div className="ml-md-auto col-md-5">
		    			<p className="">
		    				<a href="tel:+14807189210">
		    					<i className="fa fa-phone-square fa-3x fa-fw" aria-hidden="true"></i>
		    					(480)718-9210
		    				</a>
		    			</p>
		    		</div>
		    		<div className="mr-md-auto col-md-4">
		    			<p className="">
		    				<a href="https://www.instagram.com/mambos_dkitchen/" target="_blank">
		    					<i className="fa fa-instagram fa-3x fa-fw" aria-hidden="true"></i>
		    					Follow us on Instagram
		    				</a>
		    			</p>
		    		</div>
		    	</div>
		    	<div className="row justify-content-around">
		    		<div className="ml-md-auto col-md-5">
		    			<p className="">
		    				<a href="mailto:mambosdkitchen@gmail.com">
		    					<i className="fa fa-envelope-square fa-3x fa-fw" aria-hidden="true"></i>
		    					mambosdkitchen@gmail.com
		    				</a>
		    			</p>
		    		</div>
		    		<div className="mr-md-auto col-md-4">
		    			<p className="">
		    				<a href="https://www.yelp.com/biz/mambos-dominican-kitchen-chandler" target="_blank">
		    					<i className="fa fa-yelp fa-3x fa-fw" aria-hidden="true"></i>
		    					Review us on Yelp
		    				</a>
		    			</p>
		    		</div>
		    	</div>
	    	</div>
    	</div>
    </div>
  );
}

export default ContactUs;