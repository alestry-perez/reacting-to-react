import React, { useEffect, useState } from 'react';
import '../App.css';
import '../styles/styles.css';
import WeatherCard from './WeatherCard';

// ! removed an unused weather reference.
// ! imported API endpoints from .env file.
const API_END_POINT = 'https://api.openweathermap.org/data/2.5/';
const REACT_APP_API_KEY = '37b4175ce6941166c6afc1fbecea51cf';
const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w';

// ! set the default setState's to 0.
function WeatherPanel({ latitude, longitude }) {
  const [lat, setLat] = useState<number>(latitude || 0);
  const [lon, setLon] = useState<number>(longitude || 0);
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    if (lat != 0 && lon != 0) {
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        // ! added API_END_POINT to the fetch call.
        // ! added REACT_APP_API_KEY to the fetch call.
        `${API_END_POINT}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div className="App-header">
      <div>
        <h1>Todays Weather</h1>
      </div>
      {typeof data.main != 'undefined' ? (
        <WeatherCard weatherData={data} />
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default WeatherPanel;
