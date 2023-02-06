import React from 'react';
import './Persona.css'
import {Routes, Route, NavLink } from 'react-router-dom';
import "./candice.png"  
import oswaldClip from "./oswald.png"
import {Link} from 'react-router-dom';


function Persona(props) {
  return (
    <div className="main-persona-div">
      <div className = "other-persona-bar">
      <NavLink to="/persona1" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>Outgoing Oswald</NavLink>
      <NavLink to="/persona2" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>Creative Candice</NavLink>
      <NavLink to="/persona3" className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link' }>By-the-Book Buzz</NavLink>
      </div>
      
      <div className="persona-words">
        {/* <div className="persona-title">
        {props.name}
        </div> */}
    
        <div classname="persona-image">
        <img className="the-persona-image" src={props.url} alt="persona image" />
        </div>
      </div>
      
    
      </div>

  )
}

export default Persona;
