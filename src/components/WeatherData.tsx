import React, { useEffect, useState } from 'react';
import '../App.css';
import '../styles/styles.css';
import WeatherPage from './WeatherPage';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '37b4175ce6941166c6afc1fbecea51cf';

function WeatherData({ latitude, longitude, name }) {
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
        `${API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`
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
      <WeatherPage weatherData={data} />
    </div>
  );
}

export default WeatherData;
