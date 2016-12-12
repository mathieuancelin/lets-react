import React from 'react';
import { ActivityIndicatorIOS, ListView, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';

export const Loading = React.createClass({
  render() {
    return(
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.welcome}>
            Loading {this.props.what}
          </Text>
          <ActivityIndicatorIOS style={{ marginTop: 30 }} animating={true} size="large" />
        </View>
      </View>
    );
  }
});
