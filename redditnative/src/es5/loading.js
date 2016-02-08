'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = exports.Loading = _reactNative2.default.createClass({
  displayName: 'Loading',
  render: function render() {
    return _reactNative2.default.createElement(
      _reactNative.View,
      { style: _style.styles.container },
      _reactNative2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } },
        _reactNative2.default.createElement(
          _reactNative.Text,
          { style: _style.styles.welcome },
          'Loading ',
          this.props.what
        ),
        _reactNative2.default.createElement(_reactNative.ActivityIndicatorIOS, { style: { marginTop: 30 }, animating: true, size: 'large' })
      )
    );
  }
});