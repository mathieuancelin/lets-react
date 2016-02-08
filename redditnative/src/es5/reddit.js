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
    var _this = this;

    (0, _utils.fetchSubreddits)().then(function (data) {
      _this.setState({
        dataSource: _this.state.dataSource.cloneWithRows(data),
        loaded: true
      });
    }).done();
  },
  render: function render() {
    if (!this.state.loaded) {
      return _reactNative2.default.createElement(_loading.Loading, { what: 'subreddits stuff' });
    }
    return _reactNative2.default.createElement(_reactNative.ListView, { style: { marginTop: 40 }, dataSource: this.state.dataSource, renderRow: this.renderSubReddit });
  },
  renderSubReddit: function renderSubReddit(item) {
    var _this2 = this;

    return _reactNative2.default.createElement(_subredditcell.SubRedditCell, { onSelect: function onSelect() {
        return _this2.selectSubReddit(item);
      }, nbr: '', subreddit: item });
  },
  selectSubReddit: function selectSubReddit(item) {
    this.props.navigator.push({
      title: item.data.title,
      component: _subreddit.SubReddit,
      passProps: {
        display_name: item.data.display_name
      }
    });
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