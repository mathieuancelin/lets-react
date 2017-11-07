import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MyRootComponent } from './components';

function reducer(state, next) { ... }

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MyRootComponent />
  </Provider>,
  document.getElementById("app")
)