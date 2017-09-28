/**
|--------------------------------------------------
| Stateful Menu component.
| Displays Menu content with tabs.
|--------------------------------------------------
*/

import React, { Component } from 'react'; 

import MenuNav from './MenuNav.jsx';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { menu: {} };
  }
  render() {
    return (
      <section className="section-menu row" id="section-menu">
        <div>
        {/*Write code here */}
          <MenuNav />
        </div>
      </section>
    );
  }
}