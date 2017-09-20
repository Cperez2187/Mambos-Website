/**
|--------------------------------------------------
| Main Component. Wraps all other components
|--------------------------------------------------
*/
import React, { Component } from 'react';

// Import Child components
import NavBar from './Children/NavBar.jsx';
import Carousel from './Children/Carousel.jsx';
import AboutUs from './Children/AboutUs.jsx';
import Menu from './Children/Menu.jsx';
import Social from './Children/Social.jsx';
import Contact from './Children/Contact.jsx';
import Footer from './Children/Footer.jsx';

// ***** Might change this to Stateless *****
export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (

        <div className="container-fluid nopadding">

          {/* Write code here */}
            <NavBar />
            <Carousel />
            <AboutUs />
            <Social />
            <Contact />
            <Footer />
            
        </div>

    );
  }
};