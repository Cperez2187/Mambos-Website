/**
|--------------------------------------------------
| Stateless Photo component.
| Displays instagram images.
|--------------------------------------------------
*/

import React from 'react';

const Photo = (props) => {
  return (
  	<div className="col-md-2 d-inline">
      <a href={props.image.link}>
        <img src={props.image.images.thumbnail.url}/>
      </a>
    </div>
  );
}

export default Photo;