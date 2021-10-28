import React from 'react';

const WeatherPage = ({ weatherData }) => {
  return (
    <div>
      <h1>{weatherData.name}</h1>
    </div>
  );
};

export default WeatherPage;
