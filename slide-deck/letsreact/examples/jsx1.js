import React, { Component } from 'react';

export default class extends Component {
  state = {
    secondsElapsed: 0
  };
  update = () => {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }
  componentDidMount() {
    this.interval = setInterval(this.update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
       <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
