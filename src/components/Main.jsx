/**
|--------------------------------------------------
| Main Component. Wraps all other components
|--------------------------------------------------
*/
import React, { Component } from 'react';

// Import Child components
import Home from './Children/Home.jsx'
import Admin from './Children/Admin.jsx';
import Footer from './Children/Footer.jsx';

// ***** Might change this to Stateless *****
export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    stickybits('.navbar');
  }

  render() {
    return (
      <div className="container-fluid nopadding">
        {/* Write code here */}
        <Switch>
          <Route path="/" component={ Home } />
          <Route path="/admin" component={ Admin } />
        </Switch>
        <Footer />
      </div>
    );
  }
};

