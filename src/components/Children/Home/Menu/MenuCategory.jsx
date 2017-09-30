/**
|--------------------------------------------------
| Stateless menu category component
|--------------------------------------------------
*/

import React from 'react';
import MenuDish from './MenuDish.jsx';


const MenuCategory = (props) => {
  //props.category
  //props.menuItems

  const formatDishes = () => {
    return props.menuItems.map(dish => <MenuDish dish={dish} key={dish.id} />);
  }
  return (
    <div className="row category-row">
      <div className="col-md-12 container">
        {formatDishes()}
      </div>
    </div>
  );
}

export default MenuCategory;