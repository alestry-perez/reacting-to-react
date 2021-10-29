import React, { useState, useEffect } from 'react';

const WeatherPanel = ({ lat, lon }) => {
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const API_KEY = '37b4175ce6941166c6afc1fbecea51cf';

  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (lat && lon) {
      const fetchData = async () => {
        const response = await fetch(
          `${API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      };
      fetchData();
    }
  }, [lat, lon]);

  if (weather) {
    return (
      <div>
        <h1>Todays Weather in: {weather.name}</h1>
        {weather ? (
          <h2>Local Temperature is: {weather.main.temp} &deg;C</h2>
        ) : (
          'Loading'
        )}
        <h2>Current Conditions are: {weather.weather[0].description}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default WeatherPanel;
