import React, { Component } from 'react';

class HelloWhoBackup extends Component {
  static defaultProps = {
    who: 'LavaJUG'
  };
  render() {
    return (
      <h1>Hello {this.props.who}!</h1>
    );
  }
}

class BorderedBackup extends Component {
  render() {
    return (
      <div style={{ border: 'solid 1px black', padding: '10px 10px 10px 10px' }}>{this.props.children}</div>
    );
  }
}

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

class HelloWho extends Component {
  
  static defaultProps = {
    who: 'LavaJUG'
  }
  
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.props.who}!</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <HelloWho who="Mathieu">
        <li>Scala</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>Rust</li>
      </HelloWho>
    );
  }
}
