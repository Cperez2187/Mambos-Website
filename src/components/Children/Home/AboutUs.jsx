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
        <div className="pull-left col-md-4" id="about-hours">
          <div className="translucent-bg">
            <h2 className="text-center">Business Hours</h2>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Monday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Closed</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Tuesday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 9PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Wednesday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 9PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Thursday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 9PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Friday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 10PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Saturday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 10PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Sunday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 7PM</p>
              </div>
            </div>
            <br />

            <h2 className="text-center">Happy Hour</h2>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Tue - Fri:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>4PM - 7PM</p>
              </div>
            </div>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>Saturday:</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 float-left">
                <p>11AM - 3PM</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="text-div pull-right ml-md-auto mr-md-auto col-md-6" id="about">
        	<h1 className="text-center">About Us</h1>
          <p>
              Mambo's Dominican Kitchen is located in the busy commercial area of uptown Chandler, a fast-growing district in one of the best cities in Arizona.
          </p>
          <p>
              We pride ourselves in serving authentic homemade Dominican style food that's great for the whole family. Our dishes our freshly made
              and cooked with high quality ingredients(Definitely NO GMO'S).
          </p>
          <p>
              Come join us for some amazing food and awesome drinks and become part of the family. We guarantee you won't leave hungry.
          </p>
          <p>
              From our family to yours.
          </p>
        </div>
      </section>
  );
}

export default AboutUs;