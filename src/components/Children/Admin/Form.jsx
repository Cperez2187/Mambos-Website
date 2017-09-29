// Include React
import React, { Component } from 'react';
import Tab from './Tab.jsx';

import helpers from '../../utils/helpers.js';

// Creating the Form component
const Form = (props) => { 

  const dish = {props.dish};

  // When a user submits...
  const handleSubmit = (event) => {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // even.stopPropogation();
    $('#form-query').modal("toggle");

    let updates = {
        name: dish.name,
        description: dish.description,
        price: dish.price,
        category: dish.category
    }

    if(dish.id) {

      helpers.updateDish(updates, dish.id).then(response => {
          console.log(response);
          if(response.status === 200) {
            alert('GOOD TO GO');
          }
        console.log('DISH UPDATED');
      })
    } else {
      helpers.addDish(updates).then((response) => {
        console.log(response);
          if(response.status === 200) {
            alert('GOOD TO GO');
          }
        console.log('DISH UPDATED');
      })
    }
  }

  // This function will respond to the user input
  const handleChange  = (event) => {
    console.log("input changed", this);
    dish[event.target.name] = event.target.value;
  }

  // Here we describe this component's render method
  return (
    <div className="modal" id="form-query">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dish.id ? "Edit Dish" : "New Dish"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationDefault01">Item Name</label>
                  <input type="text" 
                  className="form-control" 
                  id="form-name" 
                  name="name"
                  value={dish.name}
                  onChange={handleChange}
                  required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationDefault02">Description</label>
                  <textarea
                  className="form-control" 
                  id="form-description"
                  name="description" 
                  rows="4"
                  value={dish.description}
                  onChange={handleChange}
                  required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationDefault03">Price</label>
                  <input type="text" 
                  className="form-control" 
                  id="form-price" 
                  name="price"
                  value={dish.price}
                  onChange={handleChange}
                  required />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationDefault04">Category</label>
                  <input type="text" 
                  className="form-control" 
                  id="form-category" 
                  name="category"
                  value={dish.category}
                  onChange={handleChange}
                  required />
                </div>
                <input 
                  type="hidden" 
                  id="form-id"
                  name="id"
                  value={dish.id}
                  onChange={handleChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
