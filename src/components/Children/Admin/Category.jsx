/**
|--------------------------------------------------
| Stateless Category component.
| Displays dishes of one category.
|--------------------------------------------------
*/

import React from 'react';
import Dish from './Dish.jsx';
import helpers from '../utils/helpers'

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      category: props.category,
      dishes: []
    };
  }

  componentWillRender() {
    // TODO run AJAX request to get dishes with specified state.category and populate state.dishes with query result
  }

  addDish() {
    // 
  }

  render() {
    return (
      <div className="admin-category">
      {/*Write code here */}
        <Dish />
      </div>
    );
  }
}