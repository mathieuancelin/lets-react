const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },
  setInterval(cb, delay) {
    this.intervals.push(setInterval(cb, delay));
  },
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
};


const TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return {seconds: 0};
  },
  componentDidMount() {
    this.setInterval(this.tick, 1000);
  },
  tick() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render() {
    return (
      <p>React has been running for {this.state.seconds} seconds.</p>
    );
  }
});
