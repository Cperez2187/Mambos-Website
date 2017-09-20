/**
|--------------------------------------------------
| Stateless Map component.
| Displays location using Google maps.
|--------------------------------------------------
*/

import React from 'react';

const Map = () => {
  return (
  	<div className="contact-map pull-right col-md-4 nopadding" id="contact-map">
    {/*Write code here */}
    	<iframe 
    		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13333.5724243279!2d-111.8427326!3d33.3346784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0a706c582eae531!2sMambo&#39;s+Dominican+Kitchen!5e0!3m2!1sen!2sus!4v1505807815771" 
    		width="100%"
    		height="100%"
    		frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    </div>
  );
}

export default Map;