/**
|--------------------------------------------------
| Stateful Menu component.
| Displays Menu content with tabs.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import helpers from '../../../utils/helpers.js';

import MenuNav from './MenuNav.jsx';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { menu: {} };
  }
  
  componentWillMount() {
    // Get menu from database
    helpers.getAllDishes().then(menu => {
      console.log('Menu: ', menu);
      this.setState({ menu });
    });
    
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="section-menu row" id="section-menu">
          <div>
          {/*Write code here */}
            <MenuNav />
          </div>
        </section>
      </div>
    );
  }
}