/**
|--------------------------------------------------
| Stateless Menu navigation component
|--------------------------------------------------
*/

import React from 'react';

const MenuNav = (props) => {

  document.querySelector("#" + props.category).className += "active";

  const handleNavClick = (event) => {
    console.log('Inside handleNavClick');
    console.log('event.target: ', event.target);
    // Set category in Menu component
    props.setCategory(event.target.id);
  }

  return (
    <div className="col-md-12 justify-content-center" id="menu-nav">
      {/* Write code here */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" id="appetizers" className="display-4" onClick={handleNavClick}>Appetizers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="entrees" className="display-4" onClick={handleNavClick}>Entrees</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="specials" className="display-4" onClick={handleNavClick}>Specials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="sandwiches" className="display-4" onClick={handleNavClick}>Sandwiches</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="drinks" className="display-4" onClick={handleNavClick}>Drinks</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuNav;