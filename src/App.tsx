import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import WeatherPage from './components/WeatherPage';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/weather" component={WeatherPage} />
      </Switch>
    </Router>
  );
}

export default App;
