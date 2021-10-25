import React from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
