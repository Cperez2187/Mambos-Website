// Include React
import React, { Component } from 'react';
import Tab from './Tab.jsx';

import helpers from '../../utils/helpers.js';

// Creating the Form component
export default class Form extends Component { 

  constructor(props) {
    super(props);

    this.state = { 
      category: props.category,
      dishes: [],
      name: "",
      description: "",
      price: "",
      category: ""
    };
  }

  // When a user submits...
  handleSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    // this.props.setTerm(this.state.term);
    // this.setState({ term: "" });
  }

  // This function will respond to the user input
  handleChange (key, event) {
    this.setState({ [key]: event.target.value });
  }
  

  setCategory(category) {
    this.setState({category: category});

    helpers.getDishes(category).then(response => {
      console.log(response.data);
      console.log('----------');
      this.setState( {dishes: response.data} );
    });
  }

  handleClick(index) {
    console.log(this.state.dishes[index].name);
    this.setState( 
      {
        name: this.state.dishes[index].name,
        description: this.state.dishes[index].description,
        price: this.state.dishes[index].price,
        category: this.state.dishes[index].category
      } 
    );
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
          {
            this.props.categories.map((category) => {
              return (
                <Tab category={category} key={category} setCategory={this.setCategory.bind(this)} />
              ); 
            })
          }
          {/* <Tab category={this.props.categories} /> */}
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                  >
                  {this.state.category}
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {/* populate dishes here */}
                {
                  this.state.dishes.map((dish, index) => {
                    return (
                      <a className="dropdown-item" 
                        href="#" 
                        key={index}
                        onClick={this.handleClick.bind(this, index)}>
                        {dish.name}
                      </a>
                    );
                  })
                }

              </div>
            </div>
          </div>
          <br />

          </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault01">Item Name</label>
                <input type="text" 
                className="form-control" 
                id="validationDefault01" 
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="validationDefault02">Description</label>
                <input type="text" 
                className="form-control" 
                id="validationDefault02" 
                value={this.state.description}
                onChange={this.handleChange.bind(this, "description")}
                required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault03">Price</label>
                <input type="text" 
                className="form-control" 
                id="validationDefault03" 
                value={this.state.price}
                onChange={this.handleChange.bind(this, "price")}
                required />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault04">Category</label>
                <input type="text" 
                className="form-control" 
                id="validationDefault04" 
                value={this.state.category}
                onChange={this.handleChange.bind(this, "category")}
                required />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Last Edited By</label>
                <div className="card card-inverse">Enter Admin Name here</div>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Date Edited</label>
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
      </div>
    );
  }
};
