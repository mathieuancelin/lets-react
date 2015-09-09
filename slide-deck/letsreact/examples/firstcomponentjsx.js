import React from 'react';

export default React.createClass({
  getInitialState() {
    return { count: 0 };
  },
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  },
  render() {
    return (
      <div style={{ display: 'flex', marginTop: 30, marginLeft: 40, fontSize: 24 }}>
        <span>You have clicked {this.state.count} times</span>
        <button type="button" onClick={this.handleClick} style={{ marginLeft: 10 }}>
          Click me
        </button>
      </div>
    );
  }
});

// React.render(<Clicker />, mountNode);
