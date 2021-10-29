import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
