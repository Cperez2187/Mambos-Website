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
    this.getMenu();
    
  }
  
  // Retrieves menu from DB and updates the state
  async getMenu() {
    
    const menu = await helpers.getAllDishes();
    console.log('Menu: ', menu);
    this.setState({ menu });

  }
  
  // Creates new array for specific category from menu
  formatMenu(menu, category) {

    return menu.filter(dish => dish.category === category); 

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