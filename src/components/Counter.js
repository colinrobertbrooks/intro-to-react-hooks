import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <>
        <button onClick={this.decrement}>-</button>
        <span> {this.state.count} </span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
