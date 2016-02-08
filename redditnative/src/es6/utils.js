export function fetchSubreddit(subreddit) {
  return fetch(`http://www.reddit.com/r/${subreddit}.json?sort=top&t=month`)
    .then(r => r.json())
    .then(response => {
      return response.data.children
        .filter(item => !item.data.over_18)
        .filter(item => item.data.url && item.data.url.indexOf('imgur.com') > -1)
        .filter(item => item.data.preview && item.data.preview.images && item.data.preview.images.length > 0);
    });
}

export function fetchSubreddits() {
  return fetch('http://www.reddit.com/reddits.json')
    .then(r => r.json())
    .then(r => r.data.children);
}
