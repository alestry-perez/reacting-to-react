import React from 'react';
import { useLocation } from 'react-router-dom';
import WeatherFetch from './WeatherFetch';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OtherWeather = () => {
  const q = useQuery();
  return (
    <div>
      <WeatherFetch
        name={q.get('name')}
        latitude={q.get('lat')}
        longitude={q.get('lon')}
      />
    </div>
  );
};

export default OtherWeather;
