'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reddit = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

var _subredditcell = require('./subredditcell');

var _subreddit = require('./subreddit');

var _loading = require('./loading');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reddit = exports.Reddit = _reactNative2.default.createClass({
  displayName: 'Reddit',
  getInitialState: function getInitialState() {
    return {
      dataSource: new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        } }),
      loaded: false
    };
  },
  componentDidMount: function componentDidMount() {
    // TODO : load subreddits 2
  },
  render: function render() {
    // TODO : loading page 1
    return _reactNative2.default.createElement(_reactNative.ListView, {
      style: { marginTop: 40 },
      dataSource: this.state.dataSource,
      renderRow: this.renderSubReddit });
  },
  renderSubReddit: function renderSubReddit(item) {
    var _this = this;

    return _reactNative2.default.createElement(_subredditcell.SubRedditCell, { onSelect: function onSelect() {
        return _this.selectSubReddit(item);
      }, subreddit: item });
  },
  selectSubReddit: function selectSubReddit(item) {
    // TODO : handle subreddit selection, navigate to subreddit 3
  }
});

/*
export const Reddit = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },
  componentDidMount() {
    fetchSubreddits().then(data => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        loaded: true
      });
    }).done();
  },
  render() {
    if (!this.state.loaded) {
      return(
        <Loading what="subreddits stuff" />
      );
    }
    return (
      <ListView style={{ marginTop: 40 }} dataSource={this.state.dataSource} renderRow={this.renderSubReddit} />
    );
  },
  renderSubReddit(item) {
    return(
      <SubRedditCell onSelect={() => this.selectSubReddit(item)} nbr={''} subreddit={item}/>
    );
  },
  selectSubReddit(item) {
    this.props.navigator.push({
      title: item.data.title,
      component: SubReddit,
      passProps: {
        display_name: item.data.display_name
      }
    });
  }
});
*/