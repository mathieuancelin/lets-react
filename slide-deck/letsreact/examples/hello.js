import React from 'react';

const HelloBackup = React.createClass({
  render() {
    return (
      <div style={Style.container} onClick={() => this.forceUpdate()}>
        <h1>Hello Digitech! ({Date.now()})</h1>
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

export default React.createClass({
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello Digitech!</h1>
      </div>
    );
  }
});

// React.render(React.createElement(???, null), mountNode);
