/**
|--------------------------------------------------
| Stateless Tab component.
| Displays one dish.
|--------------------------------------------------
*/

import React from 'react';

const Tab = (props) => {
  return (
      <button id={"btn btn-lg btn-default tabs-" + props.category}>
    {/*Write code here */}
    	{ props.category }
      </button>
  );
}

export default Tab;