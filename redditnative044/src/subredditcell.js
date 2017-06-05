import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';

export class SubRedditCell extends Component {
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
}

















































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
