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
  constructor(props) {
    super(props);

    this.state = { 
      category: props.routeParams || "appetizer",
      dishes: [{
            id:1,
            name: "name",
            description: "description",
            price: "price"
          },{
            id:2,
            name: "name",
            description: "description",
            price: "price"
          },{
            id:3,
            name: "name",
            description: "description",
            price: "price"
          },{
            id:4,
            name: "name",
            description: "description",
            price: "price"
          }]
    };
  }

  componentWillMount() {
    // TODO run AJAX request to get dishes with specified state.category and populate state.dishes with query result
  }

  addDish() {
    // 
  }

  render() {
    return (
      <div className="admin-category">
      {/*Write code here */}
        <h2 className="category-name text-center">{this.state.category}</h2>
        <div className="admin-dishes">
        {
          this.state.dishes.map((dish) => {
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