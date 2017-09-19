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
                  <li><a href="/">Home</a></li>
                  <li><a href='#'>About </a></li>
                  <li><a href='#'>Menu</a></li>
                  <li><a href="#">Social </a></li>
                  <li><a href="#">Contact </a></li>
                  <li><a href='#'>Manager Portal </a></li>
              </ul>
              <p className="copyright">Catherine Liu, Cesar Perez, Nick Verges © 2017</p>

          </footer>
      </div>
    </div>

  );
}

export default Footer;