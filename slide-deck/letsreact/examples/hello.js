import React from 'react';

const HelloBackup = React.createClass({
  render() {
    return (
      <div style={Style.container} onClick={() => this.forceUpdate()}>
        <h1>Hello Nantes JUG! ({Date.now()})</h1>
      </div>
    );
  }
});

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

const Hello = React.createClass({
  render() {
    return (
      <div style={Style.container} onClick={() => this.forceUpdate()}>
        <h1>Time {Date.now()}</h1>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div>
      <Hello />
      <Hello />
      </div>
    );
  }
});

// React.render(React.createElement(???, null), mountNode);
