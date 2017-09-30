/**
|--------------------------------------------------
| Stateless menu dish component
|--------------------------------------------------
*/

import React from 'react';

const MenuDish = (props) => {
  return (
    <div className="menu-card card col-md-3 d-inline-block">
		  <div className="card-body">
		    <h4 className="card-title">{props.dish.name}</h4>
		    <h6 className="card-subtitle mb-2"><em>{props.dish.description}</em></h6>
		    <p className="card-text">Price: {props.dish.price}</p>
		  </div>
		</div>
  );
}

export default MenuDish;