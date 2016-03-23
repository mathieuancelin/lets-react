import React from 'react';

const HelloWhoBackup = React.createClass({
  getDefaultProps() {
    return {
      who: 'Breizhcamp'
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

export default React.createClass({
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello Breizhcamp!</h1>
      </div>
    );
  }
});
