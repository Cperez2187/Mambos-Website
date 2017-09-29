/**
|--------------------------------------------------
| Stateless Category component.
| Displays dishes of one category.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import Dish from './Dish.jsx';

const Category = (props) => {
  const handleAdd = (event) => {
    props.setUpdatedDish({});
  }

  return (
    <div className="admin-category clearfix">
    {/*Write code here */}

      <h2 className="category-name text-center">
        {props.category} 
        &nbsp;&nbsp;
        <button 
          className="btn btn-primary btn-lg" 
          type="button"
          data-toggle="modal"
          data-target="#form-query"
          onClick={handleAdd}
          >
          New Dish
        </button>
      </h2>
      <div className="admin-dishes">
      {
        props.dishes.map((dish) => {
          return (
            <Dish dish={dish} key={dish.id} setUpdatedDish={props.setUpdatedDish} deleteDish={props.deleteDish}/>
          );
        })
      }
      </div>
    </div>
  );
}

export default Category;