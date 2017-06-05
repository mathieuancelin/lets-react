import React from 'react';

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

const HelloBackup = React.createClass({
  getInitialState() {
    return { value: '--' };
  },
  componentDidMount() {
    setTimeout(() => this.setState({ value: Date.now() }), 2000);
  },
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.state.value}!</h1>
      </div>
    );
  }
});

const Hello = React.createClass({
  getInitialState() {
    return {
      value: '---'
    };
  },
  componentDidMount() {
    setTimeout(() => this.setState({ value: Date.now() }), 2000);
  },
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.state.value}</h1>
      </div>
    );
  }
})

export default React.createClass({
  render() {
    return (
      <Hello />
    );
  }
});

// React.render(React.createElement(???, null), mountNode);
