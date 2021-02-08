import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './styles';

const Navbar = () => (
  <NavStyle>
    <Link to="/">Math Magicians</Link>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </NavStyle>
);

export default Navbar;
