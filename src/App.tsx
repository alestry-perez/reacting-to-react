import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import WeatherPage from './components/WeatherPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

function App() {
  // get location from WeatherApi
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, [lat, lon]);

  const history = useHistory();
  history.push({
    pathname: '/home',
    search: `?lat=${lat}&long=${lon}`,
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={WeatherPage}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
