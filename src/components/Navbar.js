import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
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
  </nav>
);

export default Navbar;
