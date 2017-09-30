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

    console.log(this.state);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.props);
    if(Object.keys(nextProps.dish).length === 0) {
      this.setState({
        category: "",
        name: "",
        description: "",
        price: "",
        id: ""
      })
    } else if (nextProps.dish !== this.props.dish) {
      this.setState({ 
        category: nextProps.dish.category,
        name: nextProps.dish.name,
        description: nextProps.dish.description,
        price: nextProps.dish.price,
        id:nextProps.dish.id,
      })
    }
  }

  // When a user submits...
  handleSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // even.stopPropogation();
    $('#form-query').modal("toggle");

    let updates = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category,
        id: this.state.id
    }

    this.props.saveDish(updates);
  }

  // This function will respond to the user input
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Here we describe this component's render method
  render() {
    return (
      <div className="modal" id="form-query">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.state.id ? "Edit Dish" : "New Dish"}</h5>
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
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
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
                    value={this.state.description}
                    onChange={this.handleChange}
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
                    value={this.state.price}
                    onChange={this.handleChange}
                    required />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationDefault04">Category</label>
                    <input type="text" 
                    className="form-control" 
                    id="form-category" 
                    name="category" 
                    value={this.state.category}
                    onChange={this.handleChange}
                    required />
                  </div>
                  <input 
                    type="hidden" 
                    id="form-id"
                    name="id" 
                    value={this.state.id}
                    onChange={this.handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
