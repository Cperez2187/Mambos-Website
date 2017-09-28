/**
|--------------------------------------------------
| Stateless Footer component.
| Displays fixed footer with logo and info.
|--------------------------------------------------
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Admin from './Admin.jsx';

const Footer = (props) => {
  
  const adminClick = () => {
    // set state in main to admin
    props.history.push("/admin");
  }

  return (
    
    <div className="footer-basic">
      <div>
          <footer>

              <ul className="list-inline">
                  <li><a href="/">Home</a></li>
                  <li><a href="#section-about">About </a></li>
                  <li><a href="#section-menu">Menu</a></li>
                  <li><a href="#section-social">Social </a></li>
                  <li><a href="#section-contact">Contact </a></li>
                  <li><a href="/login">Manager Portal </a></li>
              </ul>
              <p className="copyright">Catherine Liu, Cesar Perez, Nick Verges © 2017</p>

          </footer>
      </div>
    </div>

  );
}

export default Footer;