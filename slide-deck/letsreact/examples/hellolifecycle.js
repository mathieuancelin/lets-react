import React from 'react';

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

const Hello = React.createClass({
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello JSC!</h1>
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
