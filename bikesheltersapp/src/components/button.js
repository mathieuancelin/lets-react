const React = require('react-native');
const {
  StyleSheet,
  Text,
  View
} = React;

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    padding: 15,
  }
});

export default React.createClass({
  onAction() {
    (this.props.action || function() {})();
  },
  render() {
    return (
      <View onPress={this.onAction} style={[styles.button, this.props.style || {}]}>
        <Text onPress={this.onAction} style={this.props.titleStyle || {}}>{this.props.title || this.props.children}</Text>
      </View>
    );
  }
});
