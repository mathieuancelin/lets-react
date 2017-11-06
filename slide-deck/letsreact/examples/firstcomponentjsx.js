import React, { Component } from 'react';

class LikesBackup extends Component {

  state = { likes: 0 };

  like = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  
  render() {
    return (
      <div style={Style.container}>
        <span style={Style.label}>Likes : {this.state.likes}</span>
        <button type="button" onClick={this.like} style={Style.button}>
          +1
        </button>
      </div>
    );
  }
}

const Style = {
  container: {
    display: 'flex',
    marginTop: 30,
    fontSize: 24,
    padding: 20,
    backgroundColor: 'white'
  },
  button: {
    padding: 20,
    background: "black",
    minWidth: 150,
    marginTop: 20,
    marginLeft: 50,
    textTransform: "uppercase",
    border: "none",
    color: "white",
    outline: "none",
    fontWeight: "bold",
    fontSize: "2em"
  },
  label: {
    color: 'black',
    fontSize: '3.19em',
    fontFamily: 'Open Sans Condensed',
    lineHeight: '1',
    fontWeight: 'bold',
    margin: '0.5em auto',
  }
};

class Liker extends Component {
  
  state = {
    likes: 0
  }
  
  like = () => {
    this.setState({ likes: this.state.likes + 1 })
  }
  
  render() {
    return (
      <div style={Style.container}>
        <span style={Style.label}>Likes : {this.state.likes}</span>
        <button style={Style.button} type="button" onClick={this.like}>+1</button>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <Liker />
    );
  }
}
