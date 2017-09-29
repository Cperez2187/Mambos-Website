/**
|--------------------------------------------------
| Stateless Category component.
| Displays dishes of one category.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import Dish from './Dish.jsx';

const Category = (props) => {

  return (
    <div className="admin-category">
    {/*Write code here */}
      <h2 className="category-name text-center">{props.category}</h2>
      <div className="admin-dishes">
      {
        props.dishes.map((dish) => {
          return (
            <Dish dish={dish} key={dish.id}/>
          );
        })
      }
      </div>
    </div>
  );
}

export default Category;