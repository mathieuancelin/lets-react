'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubRedditCell = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubRedditCell = exports.SubRedditCell = _reactNative2.default.createClass({
  displayName: 'SubRedditCell',
  render: function render() {
    return _reactNative2.default.createElement(
      _reactNative.TouchableHighlight,
      { onPress: this.props.onSelect },
      _reactNative2.default.createElement(
        _reactNative.View,
        { style: _style.styles.container },
        _reactNative2.default.createElement(
          _reactNative.Text,
          { style: _style.styles.subredditTitle },
          this.props.subreddit.data.title
        )
      )
    );
  }
});

/*
export const SubRedditCell = React.createClass({
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.subredditTitle}>
            {this.props.subreddit.data.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});
*/