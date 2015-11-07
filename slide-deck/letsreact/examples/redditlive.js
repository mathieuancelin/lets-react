import React from 'react';

const maxHeight = 200;
const height = 300;
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
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '33%',
    borderBottom: 'solid 1px white',
    textAlign: 'left',
  }
};
function fetchSubreddit(subreddit) {
  // return fetch(`http://localhost:3000/backupreddit/reddit.json`).then((r) => r.json()).then((response) => {
  return fetch(`http://www.reddit.com/r/${subreddit}.json?sort=top&t=month`).then((r) => r.json()).then((response) => {
    return response.data.children
      .filter(item => !item.data.over_18)
      .filter(item => item.data.url.indexOf('imgur.com') > -1)
      .filter(item => item.data.preview.images && item.data.preview.images.length > 0);
    });
}
function computeUnread(state) {
  return state.stories.map(s => s.data.id).filter(i => state.read.indexOf(i) < 0).length;
}
function computeImageStyle(source) {
  let ratio = 1.0;
  if (source.height > source.width) {
    ratio = maxHeight / source.height;
  } else {
    ratio = maxHeight / source.width;
  }
  return {
    width: source.width * ratio,
    height: source.height * ratio
  };
}
function shrinkedTitle(story) {
  if (!story) return '--';
  return story.title.substring(0, 50) + (story.title.length > 50 ? '...' : '');
}
function computeCellStyle(props) {
  let style = {...Styles.story};
  if (props.unread) {
    style = {...style, ...{ fontWeight: 'bold' }};
  } else {
    style = {...style, ...{ color: 'lightgrey' }};
  }
  if (props.selected && props.selected.id === props.story.id) {
    style = {...style, ...{ backgroundColor: '#f9c300', color: 'black' }};
  }
  return style;
}

const TopBar = React.createClass({
  getDefaultProps() {
    return { unread: 0 };
  },
  render() {
    return (
      <div style={Styles.top}>
        <div style={Styles.unread}>
          You have {this.props.unread} unread stories !!!
        </div>
      </div>
    );
  }
});

const StoryCell = React.createClass({
  selectSelf() {
    this.props.select(this.props.story);
  },
  render() {
    return (
      <div style={computeCellStyle(this.props)} onClick={this.selectSelf}>
        <img src={this.props.story.thumbnail} height={60} width={60} />
        <p style={{ marginLeft: 5 }}>{shrinkedTitle(this.props.story)}</p>
      </div>
    );
  }
});

const Sidebar = React.createClass({
  render() {
    return (
      <div style={Styles.sidebar}>
        {this.props.stories
          .map(story => story.data)
          .map(story => <StoryCell 
            selected={this.props.selected}
            select={this.props.select}
            unread={this.props.read.indexOf(story.id) < 0}
            story={story} />)
        }
      </div>
    );
  }
});

const Viewer = React.createClass({
  render() {
    if (this.props.story === null) {
      return <div style={Styles.viewer}><h2>Nothing here !!!</h2></div>
    }
    const source = this.props.story.preview.images[0].source;
    return (
      <div style={Styles.viewer}>
        <h2>UPS {this.props.story.ups} / DOWN {this.props.story.downs}</h2>
        <img style={computeImageStyle(source)} src={source.url} />
      </div>  
    );
  }
});

const Reddit = React.createClass({
  getDefaultProps() {
    return { subreddit: 'funny' };
  },
  getInitialState() {
    return {
      stories: [],
      read: [],
      selected: null
    }
  },
  componentDidMount() {
    fetchSubreddit(this.props.subreddit).then(stories => {
      const first = stories[0].data;
      this.setState({ stories, selected: first, read: [first.id] });
    });
  },
  selectStory(selected) {
    this.setState({ selected, read: [...this.state.read, selected.id] });
  },
  render() {
    const unread = computeUnread(this.state);
    return (
      <div style={Styles.container}>
      <TopBar unread={unread} />
      <div style={Styles.bottom}>
        <Sidebar 
          selected={this.state.selected}
          select={this.selectStory}
          read={this.state.read}
          stories={this.state.stories} />
        <Viewer story={this.state.selected} />
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
