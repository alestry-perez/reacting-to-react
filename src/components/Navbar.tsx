import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ latitude, longitude }) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    if (lat != 0 && lon != 0) {
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  });

  return (
    <div>
      <ul>
        <Link to="/home">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to={`/local_weather/?lat=${lat}&lon=${lon}`}>
          <li>WEATHER</li>
        </Link>
        <Link to="/other_locations/?lat=40.7128&lon=74.0060">
          <li>OTHER LOCATIONS</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
