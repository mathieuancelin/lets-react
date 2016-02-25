import React, { NavigatorIOS, TabBarIOS, Text, View } from 'react-native';
import { styles } from './style';
import { Reddit } from './reddit';

export const redditnative = React.createClass({
  render() {
    // TODO : render the navigator
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Nantes JUG !!!
        </Text>
      </View>
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
