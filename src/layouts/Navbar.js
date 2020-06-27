import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className="navbar is-primary has-text-weight-medium" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <NavLink exact to="/" className="navbar-item is-size-4">Rachel Hendery</NavLink>

            <a onClick={ () => { setisActive(!isActive) } }
                role="button" className="navbar-burger"
                className={`navbar-burger burger ${ isActive ? 'is-active' : '' } ` }
                aria-label="menu" aria-expanded="false"
                data-target="navMenu"
              >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

        </div>

        <div id="navMenu" className={ `navbar-menu ${isActive ? 'is-active' : ''} ` }>
          <div className="navbar-end is-size-5">
            <NavLink exact to="/projects" className="navbar-item">Projects</NavLink>
            <NavLink exact to="/publications" className="navbar-item">Publications</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
