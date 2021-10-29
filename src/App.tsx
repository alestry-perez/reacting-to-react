import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
