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
      React.createElement("div", {style: { display: 'flex', marginTop: 30, marginLeft: 40, fontSize: 24 }},
        React.createElement("span", null, "You have clicked ", this.state.count, " times"),
        React.createElement("button", {type: "button", onClick: this.handleClick, style: { marginLeft: 10 }},
          "Click me"
        )
      )
    );
  }
});

// React.render(React.createElement(Clicker, null), mountNode);
