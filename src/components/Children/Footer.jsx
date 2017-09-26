/**
|--------------------------------------------------
| Stateless Footer component.
| Displays fixed footer with logo and info.
|--------------------------------------------------
*/

import React from 'react';

const Footer = (props) => {
  return (
    
    <div className="footer-basic">
      <div>
          <footer>

              <ul className="list-inline">
                  <li><a href="#">Home</a></li>
                  <li><a href="#section-about">About </a></li>
                  <li><a href="#section-menu">Menu</a></li>
                  <li><a href="#section-social">Social </a></li>
                  <li><a href="#section-contact">Contact </a></li>
                  <li><a href="#">Manager Portal </a></li>
              </ul>
              <p className="copyright">Catherine Liu, Cesar Perez, Nick Verges © 2017</p>

          </footer>
      </div>
    </div>

  );
}

export default Footer;