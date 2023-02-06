import React from 'react';
import './Persona.css'
import {Routes, Route, NavLink } from 'react-router-dom';
import "./candice.png"  
import oswaldClip from "./oswald.png"
import {Link} from 'react-router-dom';
import candiceLink from "./CandiceLink.png"
import oswaldLink from "./1000S.png"
import buzzLink from "./buzzLink.png"



function Personas(props) {
  return (
    <div> 
         <div className="title">
            Personas
        </div>
      <div className = "persona-bar">
      <NavLink to="/persona1" className={({ isActive }) => isActive ? 'nav-link active' : 'persona-nav-link' }>
        <img className="oswald-image" src={oswaldLink} alt="oswald image" />
          Outgoing Oswald</NavLink>
      <NavLink to="/persona2" className={({ isActive }) => isActive ? 'nav-link active' : 'persona-nav-link' }>        
        <img className="candice-image" src={candiceLink} alt="candice image" /> Creative Candice
        </NavLink>
      <NavLink to="/persona3" className={({ isActive }) => isActive ? 'nav-link active' : 'persona-nav-link' }>
        <img className="buzz-image" src={buzzLink} alt="buzz image" />  By-the-Book Buzz
    </NavLink>
      </div>
       

       </div>
  )
}

export default Personas;
