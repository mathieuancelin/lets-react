module.exports = {
  isRunnableComponent() {
    return (this.start && this.stop);
  },
  componentWillUnmount() {
    if (this.isRunnableComponent()) {
      this.stop();
    }
  },
  handleHMRReload(status) {
    if (status === 'prepare') {
      console.log(`Prepare hot reload on ${this.displayName}, stopping the component ...`);
      if (this.state.started) {
        this.wasStarted = true;
        this.stop();
      }
    }
    if (status === 'apply') {
      if (this.wasStarted) {
        console.log(`Hot reload done on ${this.displayName}, starting the component !`);
        delete this.wasStarted;
        this.start();
      }
    }
  },
  componentDidMount() {
    if (this.isRunnableComponent()) {
      console.log(`${this.displayName} is a Runnable component, plugging hot reload handler`);
      module.hot.addStatusHandler(this.handleHMRReload);
    }
  },
};
