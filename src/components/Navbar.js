import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle, Logo } from './styles';

const Navbar = () => (
  <NavStyle>
    <Logo>
      <Link to="/">Math Magicians</Link>
    </Logo>
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
