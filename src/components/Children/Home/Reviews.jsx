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
            <p className="mb-0">"Amazing food. Great music and wonderful people. Perfect place to have fun and eat good tasty food. Love this place to the max."</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Absolutely LOVE this restaurant!"</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"Great authentic Dominican food. Going to this restaurant brings back fond memories of Dominican Republic."</p>
          </blockquote>
          <blockquote className="blockquote text-center">
            <p className="mb-0">"This is a cultural experience that everyone should try!"</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Reviews;