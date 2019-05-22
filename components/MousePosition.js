import React, { Component } from "react";

class MousePosition extends Component {
  state = { x: null, y: null };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = ({ pageX, pageY }) =>
    this.setState({
      x: pageX,
      y: pageY
    });

  render() {
    return (
      <span>
        x: {this.state.x} y: {this.state.y}
      </span>
    );
  }
}

export default MousePosition;
