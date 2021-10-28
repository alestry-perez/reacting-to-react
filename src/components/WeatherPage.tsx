import React from 'react';

const refresh = () => {
  window.location.reload();
};

const WeatherPage = ({ weatherData }) => {
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
    </div>
  </div>;
};

export default WeatherPage;
