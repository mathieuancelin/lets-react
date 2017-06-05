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

export default class extends Component {
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello LavaJUG!</h1>
      </div>
    );
  }
}

// React.render(React.createElement(???, null), mountNode);
