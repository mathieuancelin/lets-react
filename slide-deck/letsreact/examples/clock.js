import React from 'react/addons';
import moment from 'moment';

const DateField = React.createClass({
  getDefaultProps() {
    return { format: 'DD/MM/YYYY' };
  },
  render() {
    return (
      <div>
        <h1>{moment().format(this.props.format)}</h1>
      </div>
    );
  }
});

const TimeField = React.createClass({
  getInitialState() {
    return {
      time: moment().format(this.props.format)
    };
  },
  getDefaultProps() {
    return { format: 'HH:mm:ss' };
  },
  updateTime() {
    this.setState({
      time: moment().format(this.props.format)
    });
  },
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
});

const Clock = React.createClass({
  getInitialState() {
    return {
      time: moment()
    };
  },
  updateTime() {
    this.setState({
      time: moment()
    });
  },
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  hoursRotation() {
    return `rotate(${30 * this.state.time.hours() + this.state.time.minutes() / 2})`;
  },
  minutesRotation() {
    return `rotate(${6 * this.state.time.minutes() + this.state.time.seconds() / 10})`;
  },
  secondsRotation() {
    return `rotate(${6 * this.state.time.seconds()})`;
  },
  render() {
    return (
      <div className="clock" style={{ width: this.props.width, height: this.props.height }}>
        <svg className="svgComponent" viewBox="0 0 100 100">
          <g transform="translate(50,50)">
            <circle className="clock-face" r="48"/>
            <line className="hour" y1="2" y2="-20" transform={this.hoursRotation()}/>
            <line className="minute" y1="4" y2="-30" transform={this.minutesRotation()}/>
            <g transform={this.secondsRotation()}>
              <line className="second" y1="10" y2="-38"/>
              <line className="second-counterweight" y1="10" y2="2"/>
            </g>
          </g>
        </svg>
      </div>
    );
  }
});

const NiceClock = React.createClass({
  render() {
    return (
      <div style={{ display: 'flex'}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <DateField format="DD/MM/YYYY" />
          <TimeField format="HH:mm:ss" />
        </div>
        <Clock width="120" height="120"/>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div style={{ paddingLeft: 30, backgroundColor: 'white', width: 400 }}>
        <NiceClock />
      </div>
    );
  }
});
