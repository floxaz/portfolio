import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
    <nav className="nav">
      <div className="row nav__display-flex">
        <div className="nav__item">
          <NavLink exact to="/" activeClassName="selected-home" className="nav__link">Home</NavLink>
        </div>
        <div className="nav__item">
          <NavLink to="/about" activeClassName="selected-about" className="nav__link">About</NavLink>
        </div>
      </div>
    </nav>
);

export default Navigation;