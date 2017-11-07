import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterInitialState = {
  count: 42
};
const statsInitialState = {
  actions: 0
};

function increment() {
  return {
    type: INCREMENT,
    value: 1
  };
}

function decrement() {
  return {
    type: DECREMENT,
    value: 1
  };
}

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.value };
    case DECREMENT:
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
}

function statsReducer(state = statsInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, actions: state.actions + 1 };
    case DECREMENT:
      return { ...state, actions: state.actions + 1 };
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  counter: counterReducer,
  stats: statsReducer,
}));


class _Counter extends Component {

  decrement = (e) => {
    this.props.dispatch(decrement());
  };

  increment = (e) => {
    this.props.dispatch(increment());
  };

  render() {
    return (
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <button type="button" style={{ marginRight: 10 }} onClick={this.decrement}>-</button>
        <div>count: {this.props.count}</div>
        <button type="button" style={{ marginLeft: 10 }} onClick={this.increment}>+</button>
      </div>
    );
  }
}

function mapStateToPropsCounter(state) {
  return {
    count: state.counter.count
  };
}

const Counter = connect(mapStateToPropsCounter)(_Counter);

class _Stats extends Component {
  render() {
    return (
      <p>There were {this.props.actions} actions</p>
    );
  }
}

function mapStateToPropsStats(state) {
  return {
    actions: state.stats.actions
  };
}

const Stats = connect(mapStateToPropsStats)(_Stats);


export class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <Counter />
            <Stats />
          </div>
        </div>
      </Provider>
    );
  }
}

