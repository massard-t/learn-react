import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hey extends Component {
  render() {
    return (
        <p> OH BEWARE SAMPLE TEXT </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          edit <code>src/App.js</code> and save to reload.
        </p>
        <Hey />
        <p> Sample text</p>
      </div>
    );
  }
}

export default App;
