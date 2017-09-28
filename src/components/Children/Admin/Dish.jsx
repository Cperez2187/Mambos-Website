/**
|--------------------------------------------------
| Stateless Dish component.
| Displays one dish.
|--------------------------------------------------
*/

import React from 'react';

const Dish = (props) => {
  return (
      <section className="admin-dish">
    {/*Write code here */}
    		<p>{props.dish.name}</p>
    		<p>{props.dish.description}</p>
    		<p>{props.dish.price}</p>
      </section>
  );
}

export default Dish;