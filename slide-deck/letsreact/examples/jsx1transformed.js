import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      secondsElapsed: 0
    };
  },
  update() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount() {
    this.interval = setInterval(this.update, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return React.createElement("div", null, "Seconds Elapsed: ", this.state.secondsElapsed);
  }
});
