import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WeatherPanel from './WeatherPanel';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const WeatherPage = () => {
  const q = useQuery();
  const [latitude, setLatitude] = useState<any>(q.get('lat'));
  const [longitude, setLongitude] = useState<any>(q.get('lon'));

  useEffect(() => {
    if (latitude && longitude) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    }
  }, []);

  if (latitude && longitude) {
    return <WeatherPanel lat={latitude} lon={longitude} />;
  } else {
    return <h1>Waiting for Location...</h1>;
  }
};

export default WeatherPage;
