// Include React
import React, { Component } from 'react';
import Tab from './Tab.jsx';

// Creating the Form component
export default class Form extends Component { 

  constructor(props) {
    super(props);

    this.state = { 
      category: props.category,
      dishes: [],
    };
  }
  

  // TODO change all of this (code from previous exercise in class)
  // When a user submits...
  handleSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  }

  // TODO change form to add new dish
  // Here we describe this component's render method
  render() {
    return (
      <div className="panel panel-default" id="form-query">
        <div className="panel-heading" id="form-query-inner">
          <h3 className="panel-title text-center">Query</h3>
        </div>

        <form>
          
          <div>
            <Tab category />
          </div>

          <div className="row">
              <div className="col-md-3">
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" 
              type="button" id="dropdownMenuButton" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                {this.state.category}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {/* populate categories here */}
                {}

                <a className="dropdown-item" href="#">Populate Categories</a>

                }
              </div>
            </div>
          </div>
          <br />

          </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label for="validationDefault01">Item Name</label>
                <input type="text" className="form-control" id="validationDefault01" value="" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="validationDefault02">Description</label>
                <input type="text" className="form-control" id="validationDefault02" value="" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="validationDefault03">Price</label>
                <input type="text" className="form-control" id="validationDefault03" required />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationDefault04">Category</label>
                <input type="text" className="form-control" id="validationDefault04" required />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationDefault05">Last Edited By</label>
                <div className="card card-inverse">Enter Admin Name here</div>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationDefault05">Date Edited</label>
                <div className="card card-inverse">Last Date Edited</div>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>


            </div>

            <div className='text-center'>
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
            <br />

          </form>

          {/* <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className=""><strong>Location</strong></h4>

              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />

              <h4 className=""><strong>Location</strong></h4>

              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />


              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form> */}
      </div>
    );
  }
};
