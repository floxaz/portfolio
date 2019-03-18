import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
    <nav>
      <div><NavLink exact to="/" activeClassName="selected">Home</NavLink></div>
      <div><NavLink to="/about" activeClassName="selected">About</NavLink></div>
    </nav>
);

export default Navigation;