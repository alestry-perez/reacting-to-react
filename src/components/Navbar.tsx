import React from 'react';
import '../App.css';
import { NavLink, useHistory } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/weather">
          <li>Current Location</li>
        </NavLink>
        <NavLink to="/weather/?lat=40.7128&lon=74.0060">
          <li>New York</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
