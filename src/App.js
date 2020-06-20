import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <div id="navbar">
            <nav className="">
              <NavLink to="/" id="name">Medil</NavLink>
              <NavLink to="/contact" className="nav-li" > Contact </NavLink>
              <NavLink to="/products" className="nav-li"> About </NavLink>
            </nav>
          </div>
      </ Router>

      <div id="fb-root"></div>
      

      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="108266287590346">
      </div>
    </div>
  );
}


export default App;
