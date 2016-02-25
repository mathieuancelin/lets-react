'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubReddit = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _style = require('./style');

var _storycell = require('./storycell');

var _story = require('./story');

var _loading = require('./loading');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubReddit = exports.SubReddit = _reactNative2.default.createClass({
  displayName: 'SubReddit',
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

    (0, _utils.fetchSubreddit)(this.props.display_name).then(function (data) {
      _this.setState({
        loaded: true,
        dataSource: _this.state.dataSource.cloneWithRows(data)
      });
    });
  },
  render: function render() {
    if (!this.state.loaded) {
      return _reactNative2.default.createElement(_loading.Loading, { what: this.props.display_name });
    }
    return _reactNative2.default.createElement(_reactNative.ListView, {
      style: { marginTop: 40 },
      dataSource: this.state.dataSource,
      renderRow: this.renderStories });
  },
  renderStories: function renderStories(item) {
    var _this2 = this;

    return _reactNative2.default.createElement(_storycell.StoryCell, { onSelect: function onSelect() {
        return _this2.selectStory(item);
      }, story: item });
  },
  selectStory: function selectStory(item) {
    var _item$data$preview$im = item.data.preview.images[0].source;
    var url = _item$data$preview$im.url;
    var width = _item$data$preview$im.width;
    var height = _item$data$preview$im.height;

    this.props.navigator.push({
      title: item.data.title,
      component: _story.Story,
      passProps: {
        image: url,
        width: width,
        height: height
      }
    });
  }
});

/*
export const SubReddit = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },
  componentDidMount() {
    fetchSubreddit(this.props.display_name).then(response => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(response),
        loaded: true
      });
    }).done();
  },
  render() {
    if (!this.state.loaded) {
      return(
        <Loading what="stories" />
      );
    }
    return (
      <ListView style={{ marginTop: 40 }} dataSource={this.state.dataSource} renderRow={this.renderStories} />
    );
  },
  renderStories(item) {
    return(
      <StoryCell onSelect={() => this.selectStory(item)} nbr={''} story={item}/>
    );
  },
  selectStory(item) {
    const { url, width, height } = item.data.preview.images[0].source;
    this.props.navigator.push({
      title: item.data.title,
      component: Story,
      passProps: {
        image: url,
        width,
        height
      }
    });
  }
});
*/