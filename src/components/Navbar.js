import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle } from './styles';

const Navbar = () => (
  <NavStyle>
    <Link to="/">LOGO</Link>
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
          Quote of the day
        </Link>
      </li>
    </ul>
  </NavStyle>
);

export default Navbar;
