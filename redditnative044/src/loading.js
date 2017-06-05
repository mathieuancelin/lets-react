import React from 'react';
import { ActivityIndicator, ListView, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';

export const Loading = React.createClass({
  render() {
    return(
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.welcome}>
            Loading {this.props.what}
          </Text>
          <ActivityIndicator style={{ marginTop: 30 }} animating={true} size="large" />
        </View>
      </View>
    );
  }
});
