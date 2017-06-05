import React, { Component } from 'react';

const maxHeight = 300;
const height = 500;
const Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 1px #f9c300',
    width: '100%',
    height: height,
    marginTop: 30,
    backgroundColor: 'white'
  },
  top: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    height: '10%',
    borderBottom: 'solid 10px #f9c300',
  },
  bottom: {
    display: 'flex',
    height: '90%',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    borderRight: 'solid 10px #f9c300',
    overflowY: 'auto',
  },
  viewer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
  },
  unread: {
    padding: '10px 20px 10px 20px'
  },
  story: {
    minHeight: 67,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '33%',
    borderBottom: 'solid 1px white',
    textAlign: 'left',
  }
};

const TopBar = React.createClass({
  getDefaultProps() {
    return { read: [], stories: [] };
  },
  render() {
    let stories = this.props.stories.filter(i => this.props.read.indexOf(i) < 0);
    return (
      <div style={Styles.top}>
        <div style={Styles.unread}>
          You have {stories.length} unread stories
        </div>
      </div>
    );
  }
});

const StoryCell = React.createClass({
  select() {
    this.props.select(this.props.story);
  },
  render() {
    let style = {...Styles.story};
    if (this.props.unread) {
      style = {...style, ...{ fontWeight: 'bold' }};
    } else {
      style = {...style, ...{ color: 'lightgrey' }};
    }
    if (this.props.selected.id === this.props.story.id) {
      style = {...style, ...{ backgroundColor: '#f9c300', color: 'black' }};
    }
    return (
      <div style={style} onClick={this.select}>
        <img src={this.props.story.thumbnail} width={60} height={60} />
        <p style={{ marginLeft: 5 }}>{this.props.story.title.substring(0, 50)} {this.props.story.title.length > 50 ? '...' : ''}</p>
      </div>
    );
  }
});

const Sidebar = React.createClass({
  getDefaultProps() {
    return { stories : [] };
  },
  render() {
    return (
      <div style={Styles.sidebar}>
        {this.props.stories
          .map(story => story.data)
          .map(story => <StoryCell story={story} select={this.props.select} selected={this.props.selected} unread={this.props.read.indexOf(story.id) < 0} />)}
      </div>
    );
  }
});

const Viewer = React.createClass({
  render() {
    if (this.props.story === null) {
      return (
        <div style={Styles.viewer}>
          <h2>Nothing to read</h2>
        </div>
      );
    } else {
      let source = this.props.story.preview.images[0].source;
      let ratio = 1.0;
      if (source.height > source.width) {
        ratio = maxHeight / source.height;
      } else {
        ratio = maxHeight / source.width;
      }
      return (
        <div style={Styles.viewer}>
          <h3>
            UPS {this.props.story.ups} / DOWNS {this.props.story.downs}
          </h3>
          <img src={source.url} style={{ width: source.width * ratio, height: source.height * ratio }} />
        </div>
      );
    }
  }
});

const Reddit = React.createClass({
  getInitialState() {
    return {
      stories: [],
      read: [],
      selected: null
    };
  },
  getDefaultProps() {
    return {
      subreddit: 'funny'
    };
  },
  componentDidMount() {
    //fetch(`http://localhost:3000/api/r/${this.props.subreddit}.json`).then((r) => r.json()).then((response) => {
    fetch(`http://www.reddit.com/r/${this.props.subreddit}.json?sort=top&t=month`).then((r) => r.json()).then((response) => {
      let stories = response.data.children
        .filter(item => !item.data.over_18)
        .filter(item => item.data.url.indexOf('imgur.com') > -1)
        .filter(item => item.data.preview.images && item.data.preview.images.length > 0);
      let first = stories[0].data;
      this.setState({ stories, selected: first, read: [first.id] });
    });
  },
  select(selected) {
    this.setState({ selected, read: [...this.state.read, selected.id] });
  },
  render() {
    return (
      <div style={Styles.container}>
        <TopBar read={this.state.read} stories={this.state.stories.map(s => s.data.id)}/>
        <div style={Styles.bottom}>
          <Sidebar stories={this.state.stories} select={this.select} selected={this.state.selected} read={this.state.read} />
          <Viewer story={this.state.selected}/>
        </div>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <Reddit subreddit="pics" />
    );
  }
});
