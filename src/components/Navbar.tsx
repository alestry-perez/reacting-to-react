import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/home">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/about">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/weather">
          <li>WEATHER</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
