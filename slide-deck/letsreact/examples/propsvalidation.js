var MyComponent = React.createClass({
  propTypes: {
    tasks: React.PropTypes.array,
    displayDate: React.PropTypes.bool,
    formatDate: React.PropTypes.func,
    nrbOfItems: pReact.PropTypes.number,
    config: React.PropTypes.object,
    title: React.PropTypes.string,
    required: React.PropTypes.*.isRequired,
    ...
  },
  render() {
    ...
  }
});
