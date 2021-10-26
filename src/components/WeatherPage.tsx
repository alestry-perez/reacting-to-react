import { useParams, useLocation } from 'react-router-dom';
import WeatherPanel from './WeatherPanel';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const WeatherPage = () => {
  const q = useQuery();
  return (
    <div>
      <WeatherPanel latitude={q.get('lat')} longitude={q.get('lon')} />
    </div>
  );
};

export default WeatherPage;
