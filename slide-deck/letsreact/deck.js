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
import FirstComponentJSX from "./examples/firstcomponentjsx";

import EditableComponent from "./utils/editablecomponent";
import Editor from "./utils/editor";

const images = {
  jsc: require("./images/background.png"),
  mathieu: require("./images/mathieu.jpg"),
  reactLogo: require("./images/react-logo.png"),
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
      <Deck transition={['zoom','slide']} transitionDuration={800}>
        <Slide bgColor="primary" bgImage={images.jsc.replace("/", "")} bgDarken={0.20}>
          <Heading size={1} fit caps textColor="#1c6e8a">
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
                <BulletList>
                  <Bullet>Développeur @SERLI</Bullet>
                  <Bullet>Scala, Java, JS, web & OSS</Bullet>
                  <Bullet>ReactiveCouchbase, Weld-OSGi, etc ...</Bullet>
                  <Bullet>Poitou-Charentes JUG</Bullet>
                  <Bullet>Membre de l’expert group MVC 1.0</Bullet>
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
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>
            Serli
          </Heading>
          <BulletList>
            <Bullet>Société de conseil et d’ingénierie du SI</Bullet>
            <Bullet>70 personnes</Bullet>
            <Bullet>Java, Cloud, Mobilité</Bullet>
            <Bullet>Contribution à des projets OSS</Bullet>
            <Bullet>10% de la force de travail sur l’OSS</Bullet>
            <Bullet>Membre du JCP </Bullet>
            <Bullet>www.serli.com @SerliFr</Bullet>
          </BulletList>
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
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>React by Facebook</Heading>
          <BulletList>
            <Bullet>Librairie Javascript pour créer des interfaces graphiques</Bullet>
            <Bullet tab={1}>rend des vues et répond à des évènements</Bullet>
            <Bullet tab={1}>le V de MVC ;-)</Bullet>
            <Bullet tab={1}>pas de full stack</Bullet>
            <Bullet>Open source depuis 2013</Bullet>
            <Bullet>Cible essentiellement les grosses applications JS avec des données qui changent dans le temps</Bullet>
            <Bullet>Utilisé en prod. sur votre mur Facebook (et surement ailleurs) et pour toute l’application web Instagram</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Déclaratif</Heading>
          <BulletList>
            <Bullet>Exprimez à quoi doit ressembler votre app. à n’importe
            quel moment dans le temps</Bullet>
            <Bullet>et React va automatiquement gérer toutes les mises à jour
            de l’UI quand les données sous-jacentes sont modifiées.</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Simple</Heading>
          <BulletList>
            <Bullet>Quand vos données changent, conceptuellement,
            React appuie sur F5 (la vue est entièrement re-rendue)</Bullet>
            <Bullet>et sait mettre à jour que les parties de l’UI qui ont réellement
            changées</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Approche composant</Heading>
          <BulletList>
            <Bullet>Avec React,
            on fabrique des composants, pas des templates !!!</Bullet>

            <Bullet>Les composants sont autonomes, réutilisables, composables
            et savent se rendre eux-même dans le DOM</Bullet>

            <Bullet>Les composants sont des briques hautement cohésives et
            peu couplées avec les autres briques</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Utilisateurs</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Virtual DOM</Heading>
          <BulletList>
            <Bullet>React rend entièrement la vue à chaque changement de son modèle</Bullet>
            <Bullet>il très très compliqué de patcher la vue à la main quand les données changent en permanence => effets de bord</Bullet>
            <Bullet>Pour que ce soit performance, React s’appuie sur un DOM virtuel</Bullet>
            <Bullet>React calcule la nouvelle vue</Bullet>
            <Bullet>React la compare avec l’ancienne</Bullet>
            <Bullet>calcule une liste de différences minimale</Bullet>
            <Bullet>React batch tous les changements nécessaires vers le DOM</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Synthetic events</Heading>
          <BulletList>
            <Bullet>React réimplémente un système d’évènement au dessus du DOM</Bullet>
            <Bullet tab={1}>bubbleling</Bullet>
            <Bullet tab={1}>Capture</Bullet>
            <Bullet tab={1}>etc …</Bullet>
            <Bullet>Conforme aux recommandations W3C</Bullet>
            <Bullet>Fonctionne de manière identique sur tous les navigateurs</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>DEMO</Heading>
          <iframe src="http://mathieuancelin.github.io/js-repaint-perfs/" style={{ width: '100%', height: '100%' }}/>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps fit>Votre premier composant</Heading>
          <EditableComponent component={FirstComponent} file="letsreact/examples/firstcomponent.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps fit>Votre premier composant</Heading>
          <EditableComponent component={FirstComponentJSX} file="letsreact/examples/firstcomponentjsx.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>DAFUQ!!!</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>DAFUQ!!!</Heading>
          jsx1
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>DAFUQ!!!</Heading>
          jsx2
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>DAFUQ!!!</Heading>
          <BulletList>
            <Bullet>Séparation des préoccupations ???</Bullet>
            <Bullet>la vue ne devrait pas être avec le « contrôleur / composant »</Bullet>
            <Bullet>Ce n’est pas un problème de couplage mais de cohésion
            de toute façon votre template est fortement couplé à votre « viewModel »
            la logique de rendu et le markup sont inévitablement couplés</Bullet>
            <Bullet>Les templates séparent les technos, pas les préoccupations</Bullet>
            <Bullet>Souvent limités, et en plus ils faut les apprendre ;-)
            {'{{>}}, {{#each}}, etc …'}</Bullet>
            <Bullet>Et on en invente tous les jours</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} fit caps>Sources de données</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>props</Heading>
          <BulletList>
            <Bullet>Les deux sources de données d’un composant</Bullet>
            <Bullet>les propriétés, définies à la création d’une instance de composant</Bullet>
            <Bullet>Idéalement immutable</Bullet>
            <Bullet>peuvent avoir des valeurs par défaut pour faciliter la réutilisation</Bullet>
            <Bullet>peuvent être validée pour faciliter la réutilisation</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>state</Heading>
          <BulletList>
            <Bullet>l’état, qui représente l’état interne d’une instance de composant</Bullet>
            <Bullet>l’état est mutable, idéalement seulement par le composant lui-même</Bullet>
            <Bullet>C’est le changement de l’état qui lancera la mise à jour de la vue. Le double data binding est supporté mais non encouragé</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Context</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Cycle de vie</Heading>
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
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Validation</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Mixins</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading caps>Horloge</Heading>
          <EditableComponent component={Clock} file="letsreact/examples/clock.js" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>The Clicker component</Heading>
          <EditableComponent component={Clicker} file="letsreact/examples/clicker.js" />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>The gallery component</Heading>
          <EditableComponent component={Gallery} file="letsreact/examples/gallery.js" />
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
