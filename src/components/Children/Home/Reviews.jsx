/**
|--------------------------------------------------
| Stateless Reviews component.
| Displays quoted reviews.
|--------------------------------------------------
*/

import React from 'react';

const Reviews = () => {
  
  return (
  	<section className="section-reviews row no-gutters parallax" id="section-reviews">
    {/*Write code here */}
      <div className="translucent-bg col-md-12">
        <div className="col-md-8 ml-md-auto mr-md-auto text-center text-div">
      		<h1>Reviews</h1>
        	<blockquote className="blockquote text-center">
            <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Reviews;