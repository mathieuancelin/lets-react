import React from "react/addons";
import Heading from "../src/heading";
import RunnableComponentMixin from './utils/runnablecomponentmixin';
import * as Feed from './utils/ScheduledFeed';

const styles = {
  padding: 20,
  background: "black",
  minWidth: 300,
  marginTop: 20,
  textTransform: "uppercase",
  border: "none",
  color: "white",
  outline: "none",
  fontWeight: "bold",
  fontSize: "2em"
};

const section = {
  marginTop: '30px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'stretch'
};

const cell = {
  flex: '1 0 90px',
  display: 'block',
  width: '90px',
  height: '90px',
  marginBottom: '5px'
};

const img = {
  backgroundColor: '#ffffff',
  width: '90px',
  height: '90px',
  opacity: 1,
  transition: 'opacity .25s ease-in-out'
};

export default React.createClass({
  displayName: 'Gallery',
  mixins: [RunnableComponentMixin],
  getInitialState() {
    return {
      started: false,
      items: []
    };
  },
  start() {
    if (!this.state.started) {
      console.log('Start Flickr streaming');
      this.setState({ started: true }, () => {
        this.stopStream = Feed.stream(25, 4000, () => this.setState({ items: Feed.getItems() }));
      });
    }
  },
  stop() {
    if (this.state.started) {
      console.log('Stop Flickr streaming');
      this.setState({ started: false });
      this.stopStream();
    }
  },
  toggleStream() {
    if (this.state.started) {
      this.stop();
    } else {
      this.start();
    }
  },
  render() {
    let buttonStyle = { ...styles };
    if (this.state.started) {
      buttonStyle.color = '#f9c300';
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div>
          <button style={buttonStyle} type="button" onClick={this.toggleStream}>Flickr stream</button>
          <section style={section}>
          {this.state.items.map(item => <div style={cell} key={item.media.m}><img style={img} src={item.media.m}/></div>)}
          </section>
        </div>
      </div>
    );
  }
});
