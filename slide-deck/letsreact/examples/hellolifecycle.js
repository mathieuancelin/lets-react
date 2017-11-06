import React, { Component } from 'react';

const Style = {
  container: {
    backgroundColor: 'white',
    padding: '10px 30px 10px 30px'
  }
};

class HelloBackup extends Component {

  state = { value: '--' };

  componentDidMount() {
    setTimeout(() => this.setState({ value: Date.now() }), 2000);
  }

  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.state.value}!</h1>
      </div>
    );
  }
}

const geopip = 'https://freegeoip.net/json/';

class Hello extends Component {
  
  state = {
    value: ''
  }
  
  componentDidMount() {
    this.setState({ value: '--' });
    fetch('https://freegeoip.net/json/').then(r => r.json()).then(data => {
      this.setState({ value: `${data.city}: ${data.latitude} / ${data.longitude}` })
    }) 
  }
  
  render() {
    return (
      <div style={Style.container}>
        <h1>Hello {this.state.value}!</h1>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

// React.render(React.createElement(???, null), mountNode);
