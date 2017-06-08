import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';

export class StoryCell extends Component {
  // TODO : display thumbnail
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.subredditTitle}>
            {this.props.story.data.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}













































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