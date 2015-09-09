
let injected = false;
let maxLength = [200];

let ids = [];
let items = [];
let listeners = [];

function dispatch(item) {
  listeners.forEach(l => l(item));
}

function enable() {
  if (!injected) {
    window.jsonFlickrFeed = function(data) {
      data.items.forEach(item => {
        if (ids.indexOf(item.media.m) < 0) {
          ids.push(item.media.m);
          items.push(item);
          dispatch(item);
          if (ids.length > maxLength) {
            ids.shift();
            items.shift();
          }
        }
      });
    };
    injected = true;
  }
}

export function getItems() {
  return [...items];
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    let index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

export function fetch() {
  enable();
  let old = document.querySelector('#flickerCallbackStuff');
  if (old) {
    window.document.body.removeChild(old);
  }
  let node = window.document.createElement('script');
  node.setAttribute('id', 'flickerCallbackStuff');
  node.setAttribute('type', 'text/javascript');
  node.setAttribute('src', 'https://api.flickr.com/services/feeds/photos_public.gne?format=json');
  document.body.appendChild(node);
};

export function stream(every) {
  fetch();
  let inter = setInterval(fetch, every || 1000);
  return () => {
    clearInterval(inter);
  };
}
