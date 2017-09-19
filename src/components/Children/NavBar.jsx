/**
|--------------------------------------------------
| Stateless Navigation Bar Component
|--------------------------------------------------
*/

import React from 'react';

const  NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-inverse" id="mainNav">

        <div className="container">
          <h1 id="homeHeading"><a className="navbar-brand js-scroll-trigger" href="#page-top">Mambo's Dominican Kitchen</a></h1>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#social">Social</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default NavBar;