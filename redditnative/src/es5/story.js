'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _reactNativeGestures = require('react-native-gestures');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Story = exports.Story = _reactNative2.default.createClass({
  displayName: 'Story',
  render: function render() {
    var _this = this;

    var style = {};
    var currentWindow = _reactNative.Dimensions.get('window');
    var _props = this.props;
    var width = _props.width;
    var height = _props.height;

    if (width >= height) {
      style.width = currentWindow.width;
      style.height = height * (style.width / width);
    } else {
      style.height = currentWindow.height;
      style.width = width * (style.height / height);
    }
    return _reactNative2.default.createElement(
      _reactNative.View,
      { onLayout: function onLayout() {
          return _this.forceUpdate();
        }, style: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' } },
      _reactNative2.default.createElement(
        _reactNative.ScrollView,
        { automaticallyAdjustContentInsets: true, bouncesZoom: true },
        _reactNative2.default.createElement(_reactNative.Image, { style: style, source: { uri: this.props.image } })
      )
    );
  }
});