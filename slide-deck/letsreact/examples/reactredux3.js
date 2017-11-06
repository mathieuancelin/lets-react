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
        <ul>
        {
          this.props.tasks
            .filter(this.props.filter)
            .map(t => <li><Task task={t} /></li>)
        }
        </ul>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.selected.tasks,
    filter: state.filter,
  };
};

export const MyComponent = connect(mapStateToProps)(MyInternalComponent);
