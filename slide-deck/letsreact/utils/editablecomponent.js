import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../../src/spectacle";

import Editor from "./editor";

export default React.createClass({
  displayName: 'EditableApp',
  render() {
    return (
      <Layout>
        <Fill>
          <Layout size={4} textColor="secondary" bgColor="white" align="left top" margin={10}>
            <Editor file={this.props.file} />
          </Layout>
        </Fill>
        <Fill>
          <Layout size={4} textColor="secondary" bgColor="white" margin={10}>
            {React.createElement(this.props.component, {})}
          </Layout>
        </Fill>
      </Layout>
    );
  }
});
