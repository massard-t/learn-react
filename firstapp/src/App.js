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

class PrettyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getInitialState() {
    return {
      active: true,
    }
  }

  handleClick() {
    this.setState(prevState => {
      active: !prevState.active
    })
    this.state.active = !this.state.active
  }

  render() {
    let isActive = this.state.active ? "On" : "Off";

    return (
      <div className="PrettyButton">
        <h3> Click this :) </h3>
        <input id="magicButton" type="submit" onClick={this.handleClick}/>
        <p>{isActive}</p>
      </div>
    )
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
        <PrettyButton />
      </div>
    );
  }
}

export default App;
