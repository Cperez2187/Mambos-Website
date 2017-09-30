/**
|--------------------------------------------------
| Stateless Menu navigation component
|--------------------------------------------------
*/

import React from 'react';

const MenuNav = (props) => {

  const handleNavClick = (event) => {
    console.log('Inside handleNavClick');
    console.log('event.target: ', event.target);
    // Set category in Menu component
    // props.setCategory(category);

    // document.querySelector('.active').removeClass();
    // document.querySelector('#' + category).addClass('active');
  }

  return (
    <div className="col-md-12 justify-content-center" id="menu-nav">
      {/* Write code here */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" id="appetizers" href="" onClick={handleNavClick}>Appetizers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="soups-salads" href="" onClick={handleNavClick}>Soups/Salads</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="" onClick={handleNavClick}>Entrees</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="" onClick={handleNavClick}>Happy Hour</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuNav;