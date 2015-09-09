import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";
import preloader from "../src/utils/preloader";

import Clicker from "./clicker";
import Gallery from "./gallery";
import EditableComponent from "./utils/editablecomponent";
import Editor from "./utils/editor";

const images = {
  jsc: require("./background.png"),
  mathieu: require("./mathieu.jpg"),
  reactLogo: require("./react-logo.png"),
};

preloader([images.mathieu]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['zoom','slide']} transitionDuration={800}>
        <Slide bgColor="primary" bgImage={images.jsc.replace("/", "")} bgDarken={0.20}>
          <Heading size={1} fit caps>
            Let's React
          </Heading>
          <Heading size={4} fit caps>
            Mathieu ANCELIN (@TrevorReznik)
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>
            Mathieu ANCELIN
          </Heading>
          <Layout>
            <Fill>
              <Layout size={4} textColor="secondary" bgColor="white" align="left top" margin={10}>
                <List>
                  <ListItem>Développeur @SERLI</ListItem>
                  <ListItem>Scala, Java, JS, web & OSS</ListItem>
                  <ListItem>ReactiveCouchbase, Weld-OSGi, etc ...</ListItem>
                  <ListItem>Poitou-Charentes JUG</ListItem>
                  <ListItem>Membre de l’expert group MVC 1.0</ListItem>
                  <ListItem>@TrevorReznik</ListItem>
                </List>
              </Layout>
            </Fill>
            <Fill>
              <Layout size={4} textColor="secondary" bgColor="white" margin={10}>
                <Image src={images.mathieu.replace('/','')} width="100%" height="100%" />
              </Layout>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>
            Serli
          </Heading>
          <List>
            <ListItem>Société de conseil et d’ingénierie du SI</ListItem>
            <ListItem>70 personnes</ListItem>
            <ListItem>Java, Cloud, Mobilité</ListItem>
            <ListItem>Contribution à des projets OSS</ListItem>
            <ListItem>10% de la force de travail sur l’OSS</ListItem>
            <ListItem>Membre du JCP </ListItem>
            <ListItem>www.serli.com @SerliFr</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit caps>
            React
          </Heading>
          <Layout>
            <Fill>
            <Image src={images.reactLogo.replace('/','')} width={400} height={400} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>The Clicker component</Heading>
          <EditableComponent component={Clicker} file="letsreact/clicker.js" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>The gallery component</Heading>
          <EditableComponent component={Gallery} file="letsreact/gallery.js" />
        </Slide>
        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading caps fit size={1}>Everything is a component</Heading>
          <Heading caps size={2}>even the slides</Heading>
          <Layout>
            <Editor file="letsreact/deck.js" width="100%" />
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
