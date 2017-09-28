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
<<<<<<< HEAD:src/components/Children/Menu/Menu.jsx
      <section className="section-menu row" id="section-menu">
        <div>
        {/*Write code here */}
          <MenuNav />
        </div>
      </section>
=======
      <div>
      {/*Write code here */}
        <MenuNav />
      </div>
>>>>>>> ce1b48fa19090daafaf7e2f8b83c61b45424372e:src/components/Children/Menu/Menu.jsx
    );
  }
}