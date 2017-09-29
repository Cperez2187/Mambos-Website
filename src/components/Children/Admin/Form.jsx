// Include React
import React, { Component } from 'react';
import Tab from './Tab.jsx';

import helpers from '../../utils/helpers.js';

// Creating the Form component
export default class Form extends Component { 

  constructor(props) {
    super(props);

    this.state = { 
      category: "",
      name: "",
      description: "",
      price: "",
      id: ""
    };
  }

  // When a user submits...
  handleSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // even.stopPropogation();

    let updates = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category
    }

    helpers.updateDish(updates, this.state.id).then(response => {
        console.log(response);
        if(response.status === 200) {
          alert('GOOD TO GO');
        }
      console.log('DISH UPDATED');
    })
  }

  // This function will respond to the user input
  handleChange (key, event) {
    this.setState({ [key]: event.target.value });
  }

  // Here we describe this component's render method
  render() {
    return (
      <div className="modal" id="form-query">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.state.title || "Title"}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault01">Item Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="form-name" 
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, "name")}
                    required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault02">Description</label>
                    <textarea
                    className="form-control" 
                    id="form-description" 
                    value={this.state.description}
                    onChange={this.handleChange.bind(this, "description")}
                    required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault03">Price</label>
                    <input type="text" 
                    className="form-control" 
                    id="form-price" 
                    value={this.state.price}
                    onChange={this.handleChange.bind(this, "price")}
                    required />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault04">Category</label>
                    <input type="text" 
                    className="form-control" 
                    id="form-category" 
                    value={this.state.category}
                    onChange={this.handleChange.bind(this, "category")}
                    required />
                  </div>
                  <input 
                    type="hidden" 
                    id="form-id"
                    value={this.state.id}
                    onChange={this.handleChange.bind(this, "id")} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
