import React from 'react';
import { ActivityIndicatorIOS, ListView, Text, TouchableHighlight, View } from 'react-native';
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
    fetchSubreddits().then(data => {
      this.setState({
        loaded: true,
        dataSource: this.state.dataSource.cloneWithRows(data)
      });
    });
  },
  render() {
    if (!this.state.loaded) {
      return <Loading what="all subreddits" />
    }
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
    this.props.navigator.push({
      title: item.data.display_name,
      component: SubReddit,
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
