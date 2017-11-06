import React, { Component } from 'react';

class HelloBackup extends Component {
  render() {
    return (
      <div style={Style.container} onClick={() => this.forceUpdate()}>
        <h1>Hello LavaJUG! ({Date.now()})</h1>
      </div>
    );
  }
}

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

class Hello extends Component {
  render() {
    return (
      <div style={Style.container} onClick={() => this.forceUpdate()}>
        <h1>Hello {Date.now()}!</h1>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return (
      React.createElement('div', null, 
        React.createElement(Hello, null),
        React.createElement(Hello, null)
      )
    );
  }
}

// React.render(React.createElement(???, null), mountNode);
