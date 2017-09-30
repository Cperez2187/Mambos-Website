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

    this.categoryMap = {
      appetizers: ['appetizer','soup','salad'],
      entrees: ['chicken','beef'],
      specials: ['specials'],
      sandwiches: ['sandwich'],
      drinks: ['juice']
    }

    this.state = { 
      menu: [],
      category: 'appetizers',
      dishes: [],
    };

    // Bind methods
    this.setCategory = this.setCategory.bind(this);
    this.formatMenu = this.formatMenu.bind(this);


  }
  
  componentWillMount() {
    // Get menu from database
    this.getMenu();
    
  }

  componentDidMount() {
    let active = document.querySelector("#appetizers");
    document.querySelector("#appetizers").className += " active";
  }
  
  // Retrieves menu from DB and updates the state
  getMenu() {
    
    helpers.getAllDishes().then(menu => {
      // console.log('Menu: ', menu);
      this.setState({ menu });
    });

  }
  
  // Creates new array for specific category from menu
  formatMenu(category) {
    console.log(this.state.menu);

    return this.state.menu.filter(dish => this.categoryMap[category].indexOf(dish.category) != -1); 
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
      <section className="section-menu row parallax" id="section-menu">
        {/*Write code here */}
        <div className="translucent-bg col-md-12">
          <MenuNav category={ this.state.category } setCategory={this.setCategory} />
          <MenuCategory category={this.state.category} menuItems={this.formatMenu(this.state.category)} />
        </div>
      </section>
    );
  }
}