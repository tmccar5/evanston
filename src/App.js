import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route  path="/home" component={Home} />
            <Route  path="/about" component={About} />  
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
