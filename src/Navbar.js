import React from 'react';
// import {Link} from 'react-router-dom';
import {Routes, Route, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
      <div className="navbar">

        <div className="main-nav-link">
          <NavLink to="/" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>Home</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>Insights</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>Personas</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link main-nav-link active' : 'reflection-link main-nav-link' }>Reflection </NavLink>
        </div>

          <div className="column-right">
            <div className="name">Noor Ramzy</div>
          </div>


      </div>
    )
  }
  
  export default Navbar;
  