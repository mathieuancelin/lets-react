import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

class MyInternalComponent extends Component {

  handleClick = () => {
    this.props.dispatch(changeFilter("yo"))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export const MyComponent = connect()(MyInternalComponent);