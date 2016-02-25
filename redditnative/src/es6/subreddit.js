import React, { ActivityIndicatorIOS, ListView, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './style';
import { StoryCell } from './storycell';
import { Story } from './story';
import { Loading } from './loading';
import { fetchSubreddit } from './utils';

export const SubReddit = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
      loaded: false
    };
  },
  componentDidMount() {
    fetchSubreddit(this.props.display_name).then(data => {
      this.setState({
        loaded: true,
        dataSource: this.state.dataSource.cloneWithRows(data),
      });
    });
  },
  render() {
    if (!this.state.loaded) {
      return <Loading what={this.props.display_name} />
    }
    return (
      <ListView
          style={{ marginTop: 40 }}
          dataSource={this.state.dataSource}
          renderRow={this.renderStories} />
    );
  },
  renderStories(item) {
    return(
      <StoryCell onSelect={() => this.selectStory(item)} story={item}/>
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
