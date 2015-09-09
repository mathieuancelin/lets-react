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
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>React by Facebook</Heading>
          <List>
            <ListItem>Librairie Javascript pour créer des interfaces graphiques</ListItem>
            <ListItem>rend des vues et répond à des évènements</ListItem>
            <ListItem>le V de MVC ;-)</ListItem>
            <ListItem>pas de full stack</ListItem>
            <ListItem>Open source depuis 2013</ListItem>
            <ListItem>Cible essentiellement les grosses applications JS avec des données qui changent dans le temps</ListItem>
            <ListItem>Utilisé en prod. sur votre mur Facebook (et surement ailleurs) et pour toute l’application web Instagram</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Déclaratif</Heading>
          <List>
            <ListItem>Exprimez à quoi doit ressembler votre app. à n’importe
            quel moment dans le temps</ListItem>
            <ListItem>et React va automatiquement gérer toutes les mises à jour
            de l’UI quand les données sous-jacentes sont modifiées.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Simple</Heading>
          <List>
            <ListItem>Quand vos données changent, conceptuellement,
            React appuie sur F5 (la vue est entièrement re-rendue)</ListItem>
            <ListItem>et sait mettre à jour que les parties de l’UI qui ont réellement
            changées</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Approche composant</Heading>
          <List>
            <ListItem>Avec React,
            on fabrique des composants, pas des templates !!!</ListItem>

            <ListItem>Les composants sont autonomes, réutilisables, composables
            et savent se rendre eux-même dans le DOM</ListItem>

            <ListItem>Les composants sont des briques hautement cohésives et
            peu couplées avec les autres briques</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Utilisateurs</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Virtual DOM</Heading>
          <List>
            <ListItem>React rend entièrement la vue à chaque changement de son modèle</ListItem>
            <ListItem>il très très compliqué de patcher la vue à la main quand les données changent en permanence => effets de bord</ListItem>
            <ListItem>Pour que ce soit performance, React s’appuie sur un DOM virtuel</ListItem>
            <ListItem>React calcule la nouvelle vue</ListItem>
            <ListItem>React la compare avec l’ancienne</ListItem>
            <ListItem>calcule une liste de différences minimale</ListItem>
            <ListItem>React batch tous les changements nécessaires vers le DOM</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Synthetic events</Heading>
          <List>
            <ListItem>React réimplémente un système d’évènement au dessus du DOM</ListItem>
            <ListItem>bubbleling</ListItem>
            <ListItem>Capture</ListItem>
            <ListItem>etc …</ListItem>
            <ListItem>Conforme aux recommandations W3C</ListItem>
            <ListItem>Fonctionne de manière identique sur tous les navigateurs</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>troll DEMO</Heading>
          <iframe src="http://mathieuancelin.github.io/js-repaint-perfs/" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Votre premier composant</Heading>
          <EditableComponent component={FirstComponent} file="letsreact/examples/firstcomponent.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Votre premier composant</Heading>
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
          <List>
            <ListItem>Séparation des préoccupations ???</ListItem>
            <ListItem>la vue ne devrait pas être avec le « contrôleur / composant »</ListItem>
            <ListItem>Ce n’est pas un problème de couplage mais de cohésion
            de toute façon votre template est fortement couplé à votre « viewModel »
            la logique de rendu et le markup sont inévitablement couplés</ListItem>
            <ListItem>Les templates séparent les technos, pas les préoccupations</ListItem>
            <ListItem>Souvent limités, et en plus ils faut les apprendre ;-)
            {'{{>}}, {{#each}}, etc …'}</ListItem>
            <ListItem>Et on en invente tous les jours</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} fit caps>Sources de données</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>props</Heading>
          <List>
            <ListItem>Les deux sources de données d’un composant</ListItem>
            <ListItem>les propriétés, définies à la création d’une instance de composant</ListItem>
            <ListItem>Idéalement immutable</ListItem>
            <ListItem>peuvent avoir des valeurs par défaut pour faciliter la réutilisation</ListItem>
            <ListItem>peuvent être validée pour faciliter la réutilisation</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>state</Heading>
          <List>
            <ListItem>l’état, qui représente l’état interne d’une instance de composant</ListItem>
            <ListItem>l’état est mutable, idéalement seulement par le composant lui-même</ListItem>
            <ListItem>C’est le changement de l’état qui lancera la mise à jour de la vue. Le double data binding est supporté mais non encouragé</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Context</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} caps>Cycle de vie</Heading>
          <List>
            <ListItem>componentWillMount</ListItem>
            <ListItem>componentDidMount</ListItem>
            <ListItem>componentWillReceiveProps</ListItem>
            <ListItem>shouldUpdateComponent</ListItem>
            <ListItem>componentWillUpdate</ListItem>
            <ListItem>componentDidUpdate</ListItem>
            <ListItem>componentWillUnmount</ListItem>
          </List>
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
