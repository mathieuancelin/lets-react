const React = require('react-native');
const _ = require('lodash');

const {
  StyleSheet,
  MapView,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  NavigatorIOS,
  TextInput
} = React;

const Shelters = require('./data/shelters');
const SinglePointMap = require('./components/singlepointmap');
const source = require('image!bicycle.png');//{ uri: 'https://raw.githubusercontent.com/mathieuancelin/opendata-poitiers-react-native/master/iOS/Images.xcassets/bicycle.imageset/bicycle.png' };

const styles = StyleSheet.create({
  stack: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
    marginLeft: 10
  },
  textSmall: {
    marginTop: 20,
    flex: 1,
    fontSize: 10,
    fontWeight: 'normal'
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15
  },
  mapContainer: {
    flex: 1,
    alignItems: 'stretch'
  }
});

const ShelterMap = React.createClass({
  render() {
    return (
      <View style={styles.mapContainer}>
        <SinglePointMap {...this.props} />
      </View>
    );
  }
});

const ShelterList = React.createClass({
  getInitialState() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.objectId !== r2.objectId });
    return {
      data: ds.cloneWithRows([]),
      input: ''
    };
  },
  componentDidMount() {
    Shelters.fetch().then(data => {
      let filteredData = data.filter(i => !_.isNull(i.address));
      this.setState({
        rawData: filteredData,
        data: this.state.data.cloneWithRows([{objectId: "inputsearch"}].concat(filteredData))
      })
    });
  },
  _pressRow(item) {
    this.props.navigator.push({
      title: "",
      component: ShelterMap,
      passProps: {
        longitude: item.location[0],
        title: `${item.address}`,
        subTitle: `${item.type} pour ${item.capacity} vélo`,
        latitude: item.location[1]
      }
    });
  },
  inputChange(text) {
    let newData = this.state.rawData.filter(item => item.address.toLowerCase().indexOf(text.toLowerCase()) > -1);
    this.setState({
      input: text,
      data: this.state.data.cloneWithRows([{objectId: "inputsearch"}].concat(newData))
    });
  },
  renderRow(item) {
    if (item.objectId === 'inputsearch') {
      return (
        <View style={styles.row}>
          <TextInput onChangeText={this.inputChange} placeholder="Place de la liberté" clearButtonMode="always" keyboardType="default" style={styles.searchInput} />
        </View>
      );
    }
    return (
      <TouchableHighlight onPress={() => this._pressRow(item)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={source} />
            <Text style={styles.text} numberOfLines={3}>
              {item.address.replace(', 86000 Poitiers, France', '')}
              {'\n\n'}
              <Text style={{ fontSize: 10 }}>{item.type} pour {item.capacity} vélos</Text>
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );

  },
  render() {
    return (
      <ListView
        dataSource={this.state.data}
        renderRow={this.renderRow}
      />
    );
  }
});

export default React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1, backgroundColor: '#F6F6EF'}}
        tintColor = 'black'
        initialRoute = {{
          title: 'Select a shelter',
          component: ShelterList,
        }} />
    );
  }
});
