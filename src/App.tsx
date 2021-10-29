import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/current_location/weather" component={WeatherPage} />
        <Route exact path="/other_location/weather" component={WeatherPage} />
      </Switch>
    </Router>
  );
}

export default App;
