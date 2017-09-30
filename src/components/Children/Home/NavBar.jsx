/**
|--------------------------------------------------
| Stateless Navigation Bar Component
|--------------------------------------------------
*/

import React from 'react';

const  NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-inverse" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/"><h2 id="homeHeading">Mambo's Dominican Kitchen</h2></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#"><h4>Home</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-about"><h4>About</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-menu"><h4>Menu</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-social"><h4>Social</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-contact"><h4>Contact</h4></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;