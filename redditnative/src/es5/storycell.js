'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryCell = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoryCell = exports.StoryCell = _reactNative2.default.createClass({
  displayName: 'StoryCell',
  render: function render() {
    return _reactNative2.default.createElement(
      _reactNative.TouchableHighlight,
      { onPress: this.props.onSelect },
      _reactNative2.default.createElement(
        _reactNative.View,
        { style: _style.styles.container },
        _reactNative2.default.createElement(_reactNative.Image, { style: _style.styles.thumbnail, source: { uri: this.props.story.data.thumbnail } }),
        _reactNative2.default.createElement(
          _reactNative.Text,
          { style: _style.styles.subredditTitle },
          this.props.story.data.title
        )
      )
    );
  }
});

/*
export const StoryCell = React.createClass({
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image style={styles.thumbnail} source={{ uri: this.props.story.data.thumbnail }} />
          <Text style={styles.subredditTitle}>
            {this.props.story.data.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});
*/