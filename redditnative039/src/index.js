import React from 'react';
import { NavigatorIOS, TabBarIOS, Text, View } from 'react-native';
import { styles } from './style';
import { Reddit } from './reddit';

export const Redditnative = React.createClass({
  render() {
    // TODO : render the navigator
    return (
      <NavigatorIOS style={styles.navigatorios}
        initialRoute={{
          title: "All Subreddits",
          component: Reddit
        }}/>
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
