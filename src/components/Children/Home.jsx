/**
|--------------------------------------------------
| Home Component. Wraps all other components on the home page
|--------------------------------------------------
*/
import React, { Component } from 'react';

// Import Child components
import NavBar from './Home/NavBar.jsx';
import Carousel from './Home/Carousel.jsx';
import AboutUs from './Home/AboutUs.jsx';
import Menu from './Home/Menu.jsx';
import Social from './Home/Social.jsx';
import Reviews from './Home/Reviews.jsx';
import Contact from './Home/Contact.jsx';

// Used for 'sticky' Nav bar
import stickybits from 'stickybits';

// ***** Might change this to Stateless *****
export default class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    stickybits('.navbar');
  }

  render() {
    return (
      <div className="home" id="home">
        {/* Write code here */}
        <Carousel />
        <NavBar />
        <AboutUs />
        <Menu />
        <Social />
        <Reviews />
        <Contact />
      </div>
    );
  }
};
