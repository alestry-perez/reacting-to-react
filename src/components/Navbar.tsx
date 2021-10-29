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
        <Link to="/current_location/weather">
          <li>LOCAL WEATHER</li>
        </Link>
        <Link to="/other_location/weather/?lat=12.0464&lon=77.0428">
          <li>OTHER LOCATIONS</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
