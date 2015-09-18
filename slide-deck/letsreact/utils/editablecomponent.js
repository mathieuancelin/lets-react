import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../../src/spectacle";

import Editor from "./editor";

export default React.createClass({
  displayName: 'EditableApp',
  getDefaultProps() {
    return {
      layout: 'vertical'
    };
  },
  verticalLayout() {
    return (
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <Layout size={4} textColor="secondary" bgColor="white" margin={10}>
            <div style={{ display: 'flex', justifyContent: 'center', width: "100%", marginBottom: '10px' }}>
              {React.createElement(this.props.component, {})}
            </div>
          </Layout>
          <Layout size={4} textColor="secondary" bgColor="white" align="left top" margin={10}>
            <Editor file={this.props.file} collapse={this.props.collapse} width="944" height={350}/>
          </Layout>
        </div>
      </Layout>
    );
  },
  horizontalLayout() {
    return (
      <Layout>
        <Fill>
          <Layout size={4} textColor="secondary" bgColor="white" align="left top" margin={10}>
            <Editor file={this.props.file} collapse={this.props.collapse} />
          </Layout>
        </Fill>
        <Fill>
          <Layout size={4} textColor="secondary" bgColor="white" margin={10}>
            {React.createElement(this.props.component, {})}
          </Layout>
        </Fill>
      </Layout>
    );
  },
  render() {
    if (this.props.layout === 'vertical') {
      return this.verticalLayout();
    } else {
      return this.horizontalLayout();
    }
  }
});
