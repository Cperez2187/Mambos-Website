/**
|--------------------------------------------------
| Stateless menu dish component
|--------------------------------------------------
*/

import React from 'react';

const MenuDish = (props) => {
  return (
    <div className="col-md-12 float-left">
      {props.dish.name}
    </div>
  );
}

export default MenuDish;