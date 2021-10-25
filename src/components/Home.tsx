import React, { useEffect, useState } from 'react';
import '../App.css';
import '../styles/styles.css';
import 'semantic-ui-css/semantic.min.css';
import Weather from './Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

// ! removed an unused weather reference.
// ! imported API endpoints from .env file.
const API_END_POINT = 'https://api.openweathermap.org/data/2.5/';
const REACT_APP_API_KEY = '37b4175ce6941166c6afc1fbecea51cf';
const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w';

// ! set the default setState's to 0.
function Home() {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        // ! added API_END_POINT to the fetch call.
        // ! added REACT_APP_API_KEY to the fetch call.
        `${API_END_POINT}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App-header">
      <div>
        <h1>Todays Weather</h1>
      </div>
      {typeof data.main != 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default Home;
