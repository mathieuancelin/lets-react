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
  etoiles: require("./images/etoiles.png"),
  favorite: require("./images/favorites.png"),
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
          <Heading size={1} textColor="#252525"    fit caps textColor="#1c6e8a">
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
                  <Bullet>Développeur @SERLI</Bullet>
                  <Bullet>Scala, Java, JS, web & OSS</Bullet>
                  <Bullet tab={1}>ReactiveCouchbase</Bullet>
                  <Bullet tab={1}>Weld-OSGi</Bullet>
                  <Bullet tab={1}>etc ...</Bullet>
                  <Bullet>Poitou-Charentes JUG</Bullet>
                  <Bullet>Expert group MVC 1.0</Bullet>
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
          <Heading size={1} textColor="#252525" caps>
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
          <Heading size={1} textColor="#252525"    fit caps>
            React
          </Heading>
          <Layout>
            <Fill>
            <Image src={images.reactLogo.replace('/','')} width={400} height={400} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>React by Facebook</Heading>
          <BulletList>
            <Bullet>Librairie Javascript pour créer des interfaces graphiques</Bullet>
            <Bullet tab={1}>rend des vues et répond à des évènements</Bullet>
            <Bullet tab={1}>le V de MVC ;-)</Bullet>
            <Bullet tab={1}>pas de full stack</Bullet>
            <Bullet>Open source depuis 2013</Bullet>
            <Bullet>Cible essentiellement les grosses applications JS avec des données qui changent dans le temps</Bullet>
            <Bullet tab={1}>Utilisé en prod. sur votre mur Facebook (et surement ailleurs) et pour toute l’application web Instagram</Bullet>
            <Bullet tab={1}>15000 composants en production</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Déclaratif</Heading>
          <BulletList>
            <Bullet>Exprimez à quoi doit ressembler votre app. à n’importe
            quel moment dans le temps</Bullet>
            <Bullet>React va automatiquement gérer toutes les mises à jour
            de l’UI quand les données sous-jacentes sont modifiées.</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Simple</Heading>
          <BulletList>
            <Bullet>Quand vos données changent, conceptuellement,
            React appuie sur F5 (la vue est entièrement re-rendue)</Bullet>
            <Bullet>et sait mettre à jour que les parties de l’UI qui ont réellement
            changées</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Approche composant</Heading>
          <BulletList>
            <Bullet>Avec React, on fabrique des composants, pas des templates !!!</Bullet>
            <Bullet>Les composants sont autonomes, réutilisables, composables et savent se rendre eux-même dans le DOM</Bullet>
            <Bullet>Les composants sont des briques hautement cohésives et peu couplées avec les autres briques</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Utilisateurs</Heading>
          <Layout>
            <Fill>
              <BulletList>
                <Bullet>Netflix</Bullet>
                <Bullet>Coursera</Bullet>
                <Bullet>Github</Bullet>
                <Bullet>reddit</Bullet>
                <Bullet>Dropbox</Bullet>
                <Bullet>Instagram</Bullet>
                <Bullet>Facebook</Bullet>
              </BulletList>
            </Fill>
            <Fill>
              <BulletList>
                <Bullet>asana</Bullet>
                <Bullet>hipchat</Bullet>
                <Bullet>airbnb</Bullet>
                <Bullet>Quip</Bullet>
                <Bullet>BBC</Bullet>
                <Bullet>Custom Ink</Bullet>
                <Bullet>expedia</Bullet>
              </BulletList>
            </Fill>
            <Fill>
              <BulletList>
                <Bullet>Salesforces</Bullet>
                <Bullet>Flipboard</Bullet>
                <Bullet>Wired</Bullet>
                <Bullet>Sony</Bullet>
                <Bullet>Yahoo</Bullet>
                <Bullet>Khan Academy</Bullet>
                <Bullet>Rally Software</Bullet>
              </BulletList>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Vues déclaratives</Heading>
          <Fill>
            <Image src={images.etoiles.replace('/','')}  />
          </Fill>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Code impératif</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/imperatif.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Code déclaratif</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/declaratif1.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Code déclaratif</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/declaratif2.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Fill>
            <Image src={images.favorite.replace('/','')}  />
          </Fill>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Diffs de la vue</Heading>
          <BulletList>
            <Bullet>React calcule la plus petite liste de changements possible à appliquer à la vue</Bullet>
            <Bullet>Applique les changements en batch dans le DOM</Bullet>
            <Bullet>Dans le cas du bouton favoris</Bullet>
            <Bullet tab={1}>Passer l’étoile en gris</Bullet>
            <Bullet tab={2}>Changer le texte du label</Bullet>
            <Bullet tab={1}>Passer le texte en bleu</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Virtual DOM</Heading>
          <BulletList>
            <Bullet>React rend entièrement la vue à chaque changement de son modèle</Bullet>
            <Bullet tab={1}>il très très compliqué de patcher la vue à la main quand les données changent en permanence => effets de bord</Bullet>
            <Bullet>Pour que ce soit performance, React s’appuie sur un DOM virtuel</Bullet>
            <Bullet tab={1}>React calcule la nouvelle vue</Bullet>
            <Bullet tab={1}>React la compare avec l’ancienne</Bullet>
            <Bullet tab={2}>calcule une liste de différences minimale</Bullet>
            <Bullet tab={1}>React batch tous les changements nécessaires vers le DOM</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Synthetic events</Heading>
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
          <Heading size={1} textColor="#252525" caps>DEMO</Heading>
          <iframe src="http://mathieuancelin.github.io/js-repaint-perfs/" frameBorder="0" style={{ width: '1024px', height: '600px' }}/>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps fit>Votre premier composant</Heading>
          <EditableComponent component={FirstComponent} file="letsreact/examples/firstcomponent.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525"  caps fit>Votre premier composant</Heading>
          <EditableComponent component={FirstComponentJSX} file="letsreact/examples/firstcomponentjsx.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>DAFUQ!!!</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>DAFUQ!!!</Heading>
          jsx1
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>DAFUQ!!!</Heading>
          jsx2
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>DAFUQ!!!</Heading>
          <BulletList>
            <Bullet>Séparation des préoccupations ???</Bullet>
            <Bullet tab={1}>la vue ne devrait pas être avec le « contrôleur / composant »</Bullet>
            <Bullet tab={1}>Ce n’est pas un problème de couplage mais de cohésion</Bullet>
            <Bullet tab={2}>de toute façon votre template est fortement couplé à votre « viewModel »</Bullet>
            <Bullet tab={2}>la logique de rendu et le markup sont inévitablement couplés</Bullet>
            <Bullet tab={1}>Les templates séparent les technos, pas les préoccupations</Bullet>
            <Bullet tab={2}>Souvent limités, et en plus ils faut les apprendre ;-)</Bullet>
            <Bullet tab={3}>{'{{>}}, {{#each}}, etc …'}</Bullet>
            <Bullet tab={2}>Et on en invente tous les jours</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525"    fit caps>Sources de données</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>props</Heading>
          <BulletList>
            <Bullet>Les deux sources de données d’un composant</Bullet>
            <Bullet>les propriétés, définies à la création d’une instance de composant</Bullet>
            <Bullet tab={1}>Idéalement immutable</Bullet>
            <Bullet>Peuvent avoir des valeurs par défaut pour faciliter la réutilisation</Bullet>
            <Bullet>Peuvent être validée pour faciliter la réutilisation</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>state</Heading>
          <BulletList>
            <Bullet>l’état, qui représente l’état interne d’une instance de composant</Bullet>
            <Bullet tab={1}>l’état est mutable, idéalement seulement par le composant lui-même</Bullet>
            <Bullet>C’est le changement de l’état qui lancera la mise à jour de la vue. Le double data binding est supporté mais non encouragé</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Context</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Cycle de vie</Heading>
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
          <Heading size={1} textColor="#252525" caps>Validation</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Mixins</Heading>
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
            <Editor file="letsreact/deck.js" width="100%" height={500}/>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
