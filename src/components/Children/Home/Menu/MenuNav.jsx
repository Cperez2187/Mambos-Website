/**
|--------------------------------------------------
| Stateless Menu navigation component
|--------------------------------------------------
*/

import React from 'react';

const MenuNav = (props) => {
  return (
    <div>
      {/* Write code here */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Appetizers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Drinks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Entrees</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Happy Hour</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuNav;