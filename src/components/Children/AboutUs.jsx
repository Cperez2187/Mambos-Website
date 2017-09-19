/**
|--------------------------------------------------
| Stateless AboutUs component.
| Displays the 'About us' section of the site.
|--------------------------------------------------
*/

import React from 'react';

const AboutUs = (props) => {
  return (
      <section className="section-about row" id="section-about">
    {/*Write code here */}
        <div className="about-img pull-left col-md-4 nopadding" >
          <img className="pull-left" src="http://lorempixel.com/g/550/550/" />
        </div> 
        <div className="about text-div pull-right col-md-8">
        	<h1 className="display-3">About Us</h1>
        	<p>
        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet lacinia dapibus. Nullam aliquam, mi eget vehicula pretium, neque leo eleifend felis, ut bibendum sapien felis vel augue. Cras vel faucibus libero. Fusce tortor felis, pulvinar tempor pharetra eu, cursus vel augue. Phasellus gravida erat sed nisi vehicula, nec molestie elit commodo. Quisque libero felis, maximus a aliquam ut, lobortis quis augue. Morbi accumsan commodo enim quis porttitor. Vivamus bibendum urna eu pulvinar vulputate. Nam eu tristique turpis. Fusce pellentesque libero eget ligula tempus volutpat. Vestibulum commodo tellus sed suscipit congue. Vivamus interdum velit vitae sem ornare, ac vestibulum ligula pretium.

    			Sed tincidunt mi vel nunc porta, et sagittis mauris sagittis. Donec convallis eu urna nec fermentum. Donec fermentum vulputate leo. Morbi id magna eros. Sed sit amet lacus lacus. Quisque ornare auctor orci vel elementum. In hac habitasse platea dictumst. Phasellus arcu nisl, blandit vel arcu eu, dignissim convallis nulla. Vestibulum sit amet erat at sem fringilla fringilla vitae eget lectus. Phasellus eget odio rutrum, fringilla tortor vel, ultricies ante. Pellentesque et viverra ante, ut blandit erat.

    			Etiam turpis arcu, eleifend et tempor pharetra, ullamcorper fermentum odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in nulla maximus, facilisis ex non, ornare lectus. Mauris pharetra sollicitudin metus, a tempus arcu finibus in. Suspendisse bibendum fringilla eros, vel egestas lectus blandit ut. Phasellus tempus venenatis tortor. Phasellus fermentum aliquet porta. Integer eu libero sodales, iaculis leo nec, convallis arcu. Ut a lobortis augue.
        	</p>
        </div>
      </section>
  );
}

export default AboutUs;