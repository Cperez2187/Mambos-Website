/**
|--------------------------------------------------
| Stateful Menu component.
| Displays Menu content with tabs.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 
import helpers from '../../utils/helpers.js';

import MenuNav from './Menu/MenuNav.jsx';
import MenuCategory from './Menu/MenuCategory.jsx';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      menu: [],
      category: 'appetizers'
    };

    // Bind methods
    this.setCategory = this.setCategory.bind(this);
    this.formatMenu = this.formatMenu.bind(this);

  }
  
  componentWillMount() {
    // Get menu from database
    this.getMenu();
    
  }
  
  // Retrieves menu from DB and updates the state
  getMenu() {
    
    helpers.getAllDishes().then(menu => {
      console.log('Menu: ', menu);
      this.setState({ menu });
    });

  }
  
  // Creates new array for specific category from menu
  formatMenu(category) {
    console.log(this.state.menu);
    if (category === 'soups-salads') {
      // Combine soups and salads
      return this.state.menu.filter(dish => dish.category === 'soup' || dish.category === 'salad');
    }

    return this.state.menu.filter(dish => dish.category === category); 

  }

  // Sets category from menu nav bar
  setCategory(category) {
    console.log('Inside setCategory');
    if (this.state.category !== category) {
      this.setState( { category });
    }
  }

  render() {

    return (
      <section className="section-menu row" id="section-menu">
        {/*Write code here */}
        <MenuNav setCategory={this.setCategory} />
        <MenuCategory category={this.state.category} menuItems={this.formatMenu(this.state.category)} />
      </section>
    );
  }
}