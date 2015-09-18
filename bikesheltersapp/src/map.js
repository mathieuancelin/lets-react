const React = require('react-native');

const {
  StyleSheet,
  View,
  LinkingIOS
} = React;

const Shelters = require('./data/shelters');
const GenericMap = require('./components/genericmap');

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    alignItems: 'stretch'
  }
});

export default React.createClass({

  getInitialState() {
    return {
      shelters: []
    };
  },

  componentDidMount() {
    Shelters.fetch().then((data) => {
      this.setState({
        shelters: data || []
      });
    });
  },

  render() {
    let annotations = this.getAnnotations();
    return (
      <View style={styles.mapContainer}>
        <GenericMap annotations={annotations} />
      </View>
    );
  },

  getAnnotations() {
    return this.state.shelters.map(shelter => {
      return {
        id: shelter.objectId,
        animateDrop: true,
        latitude: shelter.location[1],
        longitude: shelter.location[0],
        title: shelter.address,
        subtitle: `${shelter.type} pour ${shelter.capacity} vélo`,
        hasRightCallout: true,
        onRightCalloutPress: () => {
          // will be supported in version > 0.6.0
          LinkingIOS.openURL(`http://maps.apple.com/?daddr=${shelter.location[1]},${shelter.location[0]}`);
        }
      }
    });
  }
});
