/**
|--------------------------------------------------
| Stateless ImageRow component.
| Displays row of instagram images.
|--------------------------------------------------
*/

import React from 'react';
import Photo from './Photo.jsx'

const ImageRow = (props) => {
  return (
  	<div className="image-row row justify-content-center">
  		{ 
  			props.images.map(function(image, index) {
  				return ( <Photo image={image} key={index} changePrimaryImage={props.changePrimaryImage}/> );
	  		})
	  	}
  	</div>
  );
}

export default ImageRow;