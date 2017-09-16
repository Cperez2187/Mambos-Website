// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Grabs the Routes
// import routes from './config/react-routes.jsx';
import Home from './components/Home.jsx';

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

// Renders the contents according to the route page.
ReactDOM.render(<App />, document.getElementById("app"));

