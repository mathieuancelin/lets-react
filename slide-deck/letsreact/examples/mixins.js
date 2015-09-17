import React from 'react';

const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },
  every(delay) {
    let that = this;
    return {
      run(cb) {
        that.intervals.push(setInterval(cb, delay));
      }
    };
  },
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
};

export default React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return {seconds: 0};
  },
  componentDidMount() {
    this.every(1000).run(this.tick);
  },
  tick() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render() {
    return (
      <p style={{ fontSize: 30, backgroundColor: 'white', padding: 20 }}>React has been running for {this.state.seconds} seconds</p>
    );
  }
});
