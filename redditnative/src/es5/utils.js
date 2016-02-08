'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSubreddit = fetchSubreddit;
exports.fetchSubreddits = fetchSubreddits;
function fetchSubreddit(subreddit) {
  return fetch('http://www.reddit.com/r/' + subreddit + '.json?sort=top&t=month').then(function (r) {
    return r.json();
  }).then(function (response) {
    return response.data.children.filter(function (item) {
      return !item.data.over_18;
    }).filter(function (item) {
      return item.data.url && item.data.url.indexOf('imgur.com') > -1;
    }).filter(function (item) {
      return item.data.preview && item.data.preview.images && item.data.preview.images.length > 0;
    });
  });
}

function fetchSubreddits() {
  return fetch('http://www.reddit.com/reddits.json').then(function (r) {
    return r.json();
  }).then(function (r) {
    return r.data.children;
  });
}