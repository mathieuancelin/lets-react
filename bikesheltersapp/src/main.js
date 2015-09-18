const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;
const opendatapoitiers = require('./app');
const Button = require('./components/button');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 20,
    width: 50,
    fontSize: 22,
  }
});

const LikerBackup = React.createClass({
  getInitialState() {
    return { likes: 0 };
  },
  like() {
    this.setState({ likes: this.state.likes + 1 });
  },
  dislike() {
    this.setState({ likes: this.state.likes - 1 });
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Likes : {this.state.likes}</Text>
        <Button action={this.like} style={styles.button}>+1</Button>
        <Button action={this.dislike} style={styles.button}>-1</Button>
      </View>
    );
  }
});

const Liker = React.createClass({
  getInitialState() {
    return { likes: 0 };
  },
  like() {
    this.setState({ likes: this.state.likes + 1 });
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>Likes : {this.state.likes}</Text>
        <Button action={this.like}>+1</Button>
      </View>
    );
  }
})

AppRegistry.registerComponent('opendatapoitiers', () => opendatapoitiers);
