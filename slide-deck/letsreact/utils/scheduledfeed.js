import * as Feed from './feed';

let timeout = 150;
let listeners = [];
let items = [];
let stateItems = [];

function dispatch() {
  listeners.forEach(l => l());
}

export function getItems() {
  return [...stateItems];
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    let index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

export function stream(limit, every, cb = function() {}) {
  let started = true;
  let reg = subscribe(cb);
  let interval = Feed.stream(every);
  let sub = Feed.subscribe(item => {
    items.push(item);
  });

  function unstack() {
    if (!started) {
      return;
    }
    if (items.length > 0) {
      let item = items.pop();
      if (stateItems.length >= limit) {
        stateItems.shift();
      }
      if (stateItems.length === limit) {
        stateItems.shift();
      }
      setTimeout(() => {
        dispatch();
        setTimeout(() => {
          stateItems.push(item);
          dispatch();
          unstack();
        }, timeout);
      }, timeout);
    } else {
      setTimeout(unstack, timeout);
    }
  }

  function stop() {
    started = false;
    interval();
    sub();
    reg();
  }
  unstack();
  return stop;
}
