import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MyRootComponent />
  </Provider>,
  document.getElementById("app")
)