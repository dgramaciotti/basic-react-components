import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: this.props.initialValue || 0,
    step: this.props.initialStep || 1,
  };
  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };
  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };
  stepChange = (e) => {
    this.setState({
      step: parseInt(e.target.value),
    });
  };
  render() {
    return (
      <div>
        <div>Counter</div>
        <div>{this.state.number}</div>
        <label>Step Size</label>
        <input
          type="number"
          value={this.state.step}
          onChange={this.stepChange}
        />
        <button onClick={this.inc}>Inc</button>
        <button onClick={this.dec}>Dec</button>
      </div>
    );
  }
}
