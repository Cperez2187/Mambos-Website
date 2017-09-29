/**
|--------------------------------------------------
| Stateless Category component.
| Displays dishes of one category.
|--------------------------------------------------
*/

import React, { Component } from 'react';
import Dish from './Dish.jsx';
import helpers from '../../utils/helpers'

export default class Category extends Component {

  render() {
    return (
      <div className="admin-category">
      {/*Write code here */}
        <h2 className="category-name text-center">{this.props.category}</h2>
        <div className="admin-dishes">
        {
          this.props.dishes.map((dish) => {
            return (
              <Dish dish={dish} key={dish.id}/>
              );
          })
        }
        </div>
      </div>
    );
  }
}