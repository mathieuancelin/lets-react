const React = require('react-native');

const {
  StyleSheet,
  Text,
  View,
  LinkingIOS
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  welcomeLittle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default React.createClass({
  gotoSerli() {
    LinkingIOS.openURL(`http://www.serli.com`);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bike Shelters
        </Text>
        <Text style={styles.welcomeLittle}>
          with Poitiers opendata
        </Text>
        <Text style={styles.instructions} onPress={this.gotoSerli}>
          by #TeamSerli
        </Text>
      </View>
    );
  }
});
