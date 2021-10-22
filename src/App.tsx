import React, { useEffect, useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState<number[]>([]);
  const [long, setLong] = useState<number[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat([position.coords.latitude]);
        setLong([position.coords.longitude]);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
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
    <div className="App">
      {data.length > 0 ? <Weather weatherData={data} /> : <div>Loading...</div>}
    </div>
  );
}

export default App;
