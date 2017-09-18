import React, { Component } from 'react';


class PrettyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getInitialState() {
    return {
      active: true,
    };
  }

  handleClick() {
    this.setState((prevState) => {
      active: !prevState.active;
    });
    this.state.active = !this.state.active;
  }

  render() {
    const isActive = this.state.active ? 'On' : 'Off';

    return (
      <div className="PrettyButton">
        <h3> Click this :) </h3>
        <input id="magicButton" type="submit" onClick={this.handleClick} />
        <p>{isActive}</p>
      </div>
    );
  }
}

const prettyButton = PrettyButton;
export { prettyButton as default };
