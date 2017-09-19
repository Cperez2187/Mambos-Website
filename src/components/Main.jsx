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
import Social from './Children/Social/Social.jsx';
import ContactUs from './Children/Contact/ContactUs.jsx';
import footer from './Children/Footer.jsx';

// ***** Might change this to Stateless *****
export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        {/* Write code here */} 
      </div>
    );
  }
};