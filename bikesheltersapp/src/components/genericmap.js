const React = require('react-native');

const {
  MapView,
  StyleSheet,
  Text,
  View,
  Geolocation
} = React;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    margin: 0
  }
});

export default React.createClass({

  transformAnnotation(annotations) {
    return annotations.map(item => {
      let newItem = {...item};
      newItem.title = newItem.title.replace(', 86000 Poitiers, France', '');
      return newItem;
    });
  },

  getInitialState() {
    return {
      mapRegion: {
        latitude: this.props.latitude || 46.58100242725255,
        longitude: this.props.longitude || 0.3407858798158525,
        longitudeDelta: this.props.longitudeDelta || 0.02540975064701456,
        latitudeDelta: this.props.latitudeDelta || 0.02785060205418688
      }
    };
  },

  render() {
    return (
      <MapView
        style={styles.map}
        mapType="hybrid"
        pitchEnabled={true}
        zoomEnabled={true}
        showsUserLocation={true}
        region={this.state.mapRegion}
        annotations={this.transformAnnotation(this.props.annotations)}
      />
    );
  },
});
