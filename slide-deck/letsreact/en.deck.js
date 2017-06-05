import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Clicker from "./examples/clicker";
import Gallery from "./examples/gallery";
import Clock from "./examples/clock";
import FirstComponent from "./examples/firstcomponent";
import Reddit from "./examples/reddit";
import RedditLive from "./examples/redditlive";
import MixinsExample from "./examples/mixins";
import Hello from "./examples/hello";
import HelloProps from "./examples/helloprops";
import HelloLifecycle from "./examples/hellolifecycle";
import FirstComponentJSX from "./examples/firstcomponentjsx";

import EditableComponent from "./utils/editablecomponent";
import Editor from "./utils/editor";

const images = {
  jsc: require("./images/background.png"),
  mathieu: require("./images/mathieu.jpg"),
  reactLogo: require("./images/react-logo.png"),
  etoiles: require("./images/etoiles.png"),
  favorite: require("./images/favorites.png"),
  dafuq: require("./images/dafuq.jpg"),
  trees: require("./images/trees.png"),
  treeBefore: require("./images/tree-before.png"),
  treeAfter: require("./images/tree-after.png"),
};

const BulletList = React.createClass({
  render() {
    return (
      <List style={{ textAlign: 'justify' }}>{this.props.children}</List>
    );
  }
});

const Bullet = React.createClass({
  getDefaultProps() {
    return { tab: 0 };
  },
  render() {
    return <ListItem style={{ marginLeft: this.props.tab * 30 }}>{this.props.children}</ListItem>;
  }
});

preloader([images.mathieu]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={800}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="#1C1C1C">
            Let's React
          </Heading>
          <Heading size={4} fit caps>
            Mathieu ANCELIN (@TrevorReznik)
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>
            Mathieu ANCELIN
          </Heading>
          <Layout>
            <Fill>
              <Layout size={4} textColor="secondary" bgColor="white" align="left top" margin={10}>
                <BulletList>
                  <Bullet>Developer @SerliFr</Bullet>
                  <Bullet>Scala, Java, JS, web & OSS</Bullet>
                  <Bullet tab={1}>ReactiveCouchbase</Bullet>
                  <Bullet tab={1}>Weld-OSGi</Bullet>
                  <Bullet tab={1}>etc ...</Bullet>
                  <Bullet>Poitou-Charentes JUG</Bullet>
                  <Bullet>MVC 1.0 expert group member</Bullet>
                  <Bullet>@TrevorReznik</Bullet>
                </BulletList>
              </Layout>
            </Fill>
            <Fill>
              <Layout size={4} textColor="secondary" bgColor="white" margin={10}>
                <Image src={images.mathieu.replace('/','')} width="100%" height="100%" />
              </Layout>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="white" caps>React</Heading>
          <Layout>
            <Fill>
            <Image src={images.reactLogo.replace('/','')} width={400} height={400} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>React by Facebook</Heading>
          <BulletList>
            <Bullet>Javascript library to create UI</Bullet>
            <Bullet tab={1}>render views and respond to events</Bullet>
            <Bullet tab={1}>V in MVC ;-)</Bullet>
            <Bullet tab={1}>no full stack</Bullet>
            <Bullet>Created in 2011 and open sourced in 2013</Bullet>
            <Bullet tab={1}>Facebook and other apps</Bullet>
            <Bullet tab={1}>the whole Instagram webapp</Bullet>
            <Bullet tab={1}>15000 components used in production</Bullet>
            <Bullet tab={1}>Lot of users : Netflix, Coursera, Reddit, Yahoo, Hipchat ...</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} fit textColor="#252525" caps>Declarative and simple</Heading>
          <BulletList>
            <Bullet>Express what your view must look like at any point in time</Bullet>
            <Bullet>Whenever your input data changes</Bullet>
            <Bullet tab={1}>React re-render the whole view (F5)</Bullet>
            <Bullet tab={1}>But actually update only changed parts in the DOM</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" fit caps>Declarative and simple</Heading>
          <Fill>
            <Image src={images.etoiles.replace('/','')}  />
          </Fill>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Imperative code</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={require("raw!./examples/imperatif.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Declarative code</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={require("raw!./examples/declaratif1.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
        <Heading size={1} textColor="#252525" caps>Declarative code</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={require("raw!./examples/declaratif2.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Fill>
            <Image src={images.favorite.replace('/','')} width="80%" height="80%" />
          </Fill>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Virtual DOM</Heading>
          <BulletList>
            <Bullet>React computes the smallest list of changes to apply to the view</Bullet>
            <Bullet>Batches all those changes in the DOM</Bullet>
            <Bullet>For the favorite button</Bullet>
            <Bullet tab={1}>Change image src to the grey one</Bullet>
            <Bullet tab={1}>Change text</Bullet>
            <Bullet tab={1}>Change the class of the label</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Virtual DOM</Heading>
          <Layout>
            <Appear fid="1">
              <Fill>
                <Image src={images.treeBefore.replace('/','')} style={{ backgroundColor: 'white' }} width="100%" height="100%" />
              </Fill>
            </Appear>
            <Appear fid="2">
              <Fill>
                <Image src={images.treeAfter.replace('/','')} style={{ marginLeft: 5, backgroundColor: 'white' }} width="100%" height="100%" />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        {/*<Slide bgColor="#1C1C1C" textColor="black" align="center top">
          <iframe src="http://mathieuancelin.github.io/js-repaint-perfs/"
            frameBorder="0" style={{ marginTop: '50px', width: 856, height: 600, backgroundColor: 'white' }}/>
        </Slide>*/}
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading textColor="#252525" caps size={1} fit>Everything is a component</Heading>
          <BulletList>
            <Bullet>With React you build components, no more templates</Bullet>
            <Bullet>Components are autonomous, reusable, composable and can render themseleves in the DOM</Bullet>
            <Bullet>Components are highly cohesive and losely coupled bricks</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps fit>Hello React</Heading>
          <EditableComponent component={Hello} file="letsreact/examples/hello.js" />
        </Slide>
        <Slide bgColor="primary">
          <Heading textColor="#252525" caps size={1} fit>Everything is a component</Heading>
          <Heading caps size={2}>Hello LavaJUG</Heading>
          <Layout>
            <h1>I'm writing react inside react slides with react. REact !!!</h1>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" fit caps>Data sources</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Props</Heading>
          <BulletList>
            <Bullet>Defined at component instanciation</Bullet>
            <Bullet tab={1}>Ideally immutable</Bullet>
            <Bullet>Can specify default values to ease reusability</Bullet>
            <Bullet>Can be validated to ease reusability (types, value, etc ...)</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Props</Heading>
          <EditableComponent component={HelloProps} file="letsreact/examples/helloprops.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>State</Heading>
          <BulletList>
            <Bullet>The internal state of a component instance</Bullet>
            <Bullet tab={1}>the state is mutable, ideally only by itself</Bullet>
            <Bullet>Any mutation of the state will trigger view rendering</Bullet>
            <Bullet>Two way databinding is possible but not encouraged</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>State</Heading>
          <EditableComponent component={FirstComponentJSX} file="letsreact/examples/firstcomponentjsx.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Lifecycle</Heading>
          <BulletList>
            <Bullet>componentWillMount</Bullet>
            <Bullet>componentDidMount</Bullet>
            <Bullet>componentWillReceiveProps</Bullet>
            <Bullet>shouldUpdateComponent</Bullet>
            <Bullet>componentWillUpdate</Bullet>
            <Bullet>componentDidUpdate</Bullet>
            <Bullet>componentWillUnmount</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Lifecycle</Heading>
          <EditableComponent component={HelloLifecycle} file="letsreact/examples/hellolifecycle.js" />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Webcomponents</Heading>
          <BulletList>
            <Bullet>WebComponents are supported as JSX leaves</Bullet>
            <Bullet>You can't expose a React component as a WebComponent</Bullet>
            <Bullet tab={1}>React team is working on such integration</Bullet>
            <Bullet tab={1}>But you can use libs ;-)</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Tests</Heading>
          <Editor file="letsreact/examples/tests.example" width="100%" height={500} collapse={false}/>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Ecosystem</Heading>
          <Layout>
            <Fill>
              <BulletList>
                <Bullet>React Router</Bullet>
                <Bullet>Flux (Redux)</Bullet>
                <Bullet>Radium</Bullet>
                <Bullet>JSXStyle</Bullet>
                <Bullet>React canvas</Bullet>
                <Bullet>React art</Bullet>
                <Bullet>React motion</Bullet>
              </BulletList>
            </Fill>
            <Fill>
              <BulletList>
                <Bullet>React native</Bullet>
                <Bullet>GraphQL</Bullet>
                <Bullet>Relay</Bullet>
                <Bullet>React hot loader</Bullet>
                <Bullet>Bootstrap, Material, ...</Bullet>
                <Bullet>Awesome React</Bullet>
                <Bullet>...</Bullet>
              </BulletList>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary">
          <Reddit />
        </Slide>
        <Slide bgColor="primary">
          <EditableComponent component={RedditLive} file="letsreact/examples/redditlive.js" />
        </Slide>
        {/*<Slide bgColor="primary" textColor="black" align="center top">
          <EditableComponent component={Clock} file="letsreact/examples/clock.js" />
        </Slide>*/}
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Conclusion</Heading>
        </Slide>
      </Deck>
    )
  }
}
