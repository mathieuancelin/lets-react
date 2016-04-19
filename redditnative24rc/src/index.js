import React, { NavigatorIOS, TabBarIOS, Text, View } from 'react-native';
import { styles } from './style';
import { Reddit } from './reddit';

export const Redditnative = React.createClass({
  render() {
    // TODO : render the navigator
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello DevoxxFr !!!
        </Text>
      </View>
    );
  }
});


















































/*
export const Redditnative = React.createClass({
  render() {
    return (
      <NavigatorIOS style = {styles.navigatorios}
        initialRoute = {{ title: 'subreddits', component: Reddit }} />
    );
  }
});
*/
