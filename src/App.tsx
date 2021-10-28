import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WeatherPage from './components/WeatherPage';
import WeatherFetch from './components/WeatherFetch';
import OtherWeather from './components/OtherWeather';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/local_weather" component={WeatherFetch} />
        <Route exact path="/other_locations" component={OtherWeather} />
      </Switch>
    </Router>
  );
}

export default App;
