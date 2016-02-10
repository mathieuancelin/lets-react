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
  // onClick setState props thumbnail preview componentDidMount selectSelf select 
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

export default React.createClass({
  render() {
    return (
      <div style={Styles.container}><h1>Hello Bordeaux JUG</h1></div>
    );
  }
});
