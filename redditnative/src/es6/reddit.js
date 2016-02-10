import React, { ActivityIndicatorIOS, ListView, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';
import { SubRedditCell } from './subredditcell';
import { SubReddit } from './subreddit';
import { Loading } from './loading';
import { fetchSubreddits } from './utils';

export const Reddit = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false
    };
  },
  componentDidMount() {
    // TODO : load subreddits
  },
  render() {
    // TODO : laading page
    return (
      <ListView
          style={{ marginTop: 40 }}
          dataSource={this.state.dataSource}
          renderRow={this.renderSubReddit} />
    );
  },
  renderSubReddit(item) {
    return(
      <SubRedditCell onSelect={() => this.selectSubReddit(item)} subreddit={item}/>
    );
  },
  selectSubReddit(item) {
    // TODO : handle subreddit selection, navigate to subreddit
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
