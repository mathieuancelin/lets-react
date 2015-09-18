import React from 'react';

const HelloWhoBackup = React.createClass({
  getDefaultProps() {
    return {
      who: 'JSC'
    };
  },
  render() {
    return (
      <h1>Hello {this.props.who}!</h1>
    );
  }
});
const BorderedBackup = React.createClass({
  render() {
    return (
      <div style={{ border: 'solid 1px black', padding: '10px 10px 10px 10px' }}>{this.props.children}</div>
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
  getDefaultProps() {
    return { name: "World" };
  },
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.props.name}!</h1>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <Hello name="mathieu">
        <li>Scala</li>
        <li>Java</li>
        <li>Javascript</li>
      </Hello>
    );
  }
});
