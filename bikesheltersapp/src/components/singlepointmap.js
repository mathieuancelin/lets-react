const React = require('react-native');

const {
  MapView,
  StyleSheet,
  Text,
  View,
  Geolocation
} = React;

const GenericMap = require('./genericmap');

export default React.createClass({
  render() {
    let annotations = [
      {
        id: "1",
        title: this.props.title,
        subtitle: this.props.subTitle,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        animateDrop: true,
        hasRightCallout: true,
        onRightCalloutPress: () => {
          // will be supported in version > 0.6.0
          LinkingIOS.openURL(`http://maps.apple.com/?daddr=${this.props.latitude},${this.props.longitude}`);
        }
      }
    ];
    return (
      <GenericMap annotations={annotations} latitude={this.props.latitude} longitude={this.props.longitude} />
    );
  },
});
