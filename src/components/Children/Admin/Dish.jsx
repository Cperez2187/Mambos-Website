/**
|--------------------------------------------------
| Stateless Dish component.
| Displays one dish.
|--------------------------------------------------
*/

import React from 'react';

const Dish = (props) => {

	const handleEdit = (event) => {
		props.setUpdatedDish(props.dish);
	}

	const handleDelete = (event) => {
		props.deleteDish(props.dish.id);
	}

  return (
      <div className="admin-dish col-md-12">
   	  {/*Write code here */}
   	  	<div className="card dish-card">
			    <div className="card-body">
   	  			<div className="dish-info col-md-8 d-inline-block float-left">
			        <h4 className="card-title">{props.dish.name}</h4>
			        <p className="card-text">
			        	{props.dish.description}
			        	<br /><br />
			        	Price: {props.dish.price}
		        	</p>
			      </div>
			      <div className="dish-buttons col-md-3 d-inline-block float-right">
		    			<button 
		    				className="btn btn-lg btn-success btn-block" 
		    				type="button" 
		    				data-toggle="modal" 
		    				data-target="#form-query" 
		    				onClick={handleEdit}
	    				>
		    				Edit
	    				</button>
		    			<button 
		    				className="btn btn-lg btn-danger btn-block" 
		    				type="button"
		    				onClick={handleDelete} 
		    			>
		    				Delete
	    				</button>
		    		</div>
    			</div>
    		</div>
      </div>
  );
}

export default Dish;