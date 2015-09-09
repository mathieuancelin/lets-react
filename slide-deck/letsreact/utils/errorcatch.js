import React from 'react';
import RedBox from 'redbox-react';

export default React.createClass({
  displayName: 'ErrorCatcher',
  render() {
    let element = this.props.render;
    const originalRender = ReactClass.prototype.render;
    ReactClass.prototype.render = function renderCatch() {
      try {
        return originalRender.apply(this, arguments);
      } catch (e) {
        console.log('got an error', e);
        return <RedBox error={e} />;
      }
    };
    return React.createElement(element, {});
  }
});
