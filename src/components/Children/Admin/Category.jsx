/**
|--------------------------------------------------
| Stateless Category component.
| Displays dishes of one category.
|--------------------------------------------------
*/

import React from 'react';

const AboutUs = (props) => {
  return (
      <section className="admin-category row no-gutters" id="section-about">
    {/*Write code here */}
        <div className="pull-left col-md-4" id="about-img">
          <img className="pull-left" src="http://lorempixel.com/g/550/550/" />
        </div> 
        <div className="text-div pull-right col-md-8" id="about">
        	<h1 className="text-center">About Us</h1>
        	<p>
        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet lacinia dapibus. Nullam aliquam, mi eget vehicula pretium, neque leo eleifend felis, ut bibendum sapien felis vel augue. Cras vel faucibus libero. 
          </p>
          <p>
    			Sed tincidunt mi vel nunc porta, et sagittis mauris sagittis. Donec convallis eu urna nec fermentum. Donec fermentum vulputate leo. Morbi id magna eros. Sed sit amet lacus lacus. Quisque ornare auctor orci vel elementum. In hac habitasse platea dictumst. Phasellus arcu nisl, blandit vel arcu eu, dignissim convallis nulla. 
          </p>
          <p>
    			Etiam turpis arcu, eleifend et tempor pharetra, ullamcorper fermentum odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        	</p>
        </div>
      </section>
  );
}

export default AboutUs;