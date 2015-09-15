import React from 'react';

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

const HelloWho = React.createClass({
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

const Bordered = React.createClass({
  render() {
    return (
      <div style={{ border: 'solid 1px black', padding: '10px 10px 10px 10px' }}>{this.props.children}</div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello JSC!</h1>
      </div>
    );
  }
});
