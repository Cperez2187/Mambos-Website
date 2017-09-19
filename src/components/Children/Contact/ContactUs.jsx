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
    	<div className="container-fluid text-center nopadding">
	    	<h1 className="display-3"> Contact Us </h1>
	    	<div className="row">
	    		<div className="col-md-6">
	    			<p className="h4"><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>1950 N Arizona Ave Ste 8, Chandler, AZ 85225</p>
	    		</div>
	    		<div className="col-md-6">
	    			<i className="fa fa-map-marker" aria-hidden="true"></i>1950 N Arizona Ave Ste 8, Chandler, AZ 85225
	    		</div>
	    	</div>
    	</div>
    </div>
  );
}

export default ContactUs;