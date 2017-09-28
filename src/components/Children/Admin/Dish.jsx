/**
|--------------------------------------------------
| Stateless Dish component.
| Displays one dish.
|--------------------------------------------------
*/

import React from 'react';

const Dish = (props) => {
  return (
      <div className="admin-dish col-md-6 d-inline-block">
    {/*Write code here */}
    		<p>Name: {props.dish.name}</p>
    		<p>Description: {props.dish.description}</p>
    		<p>Price: {props.dish.price}</p>
      </div>
  );
}

export default Dish;