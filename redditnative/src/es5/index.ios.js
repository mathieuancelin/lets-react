'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redditnative = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

var _reddit = require('./reddit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redditnative = exports.redditnative = _reactNative2.default.createClass({
  displayName: 'redditnative',
  render: function render() {
    // TODO : render the navigator
    return _reactNative2.default.createElement(
      _reactNative.View,
      { style: _style.styles.container },
      _reactNative2.default.createElement(
        _reactNative.Text,
        { style: _style.styles.welcome },
        'Hello Nantes JUG !!!'
      )
    );
  }
});

/*
export const redditnative = React.createClass({
  render() {
    return (
      <NavigatorIOS style = {styles.navigatorios}
        initialRoute = {{ title: 'subreddits', component: Reddit }} />
    );
  }
});
*/