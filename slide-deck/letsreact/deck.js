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
  rn: require("./images/rn.png"),
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
        {/*<Slide bgColor="primary" textColor="black" align="center top">
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
        </Slide>*/}
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
            <Bullet>Librairie Javascript pour créer des interfaces graphiques</Bullet>
            <Bullet tab={1}>rend des vues et répond à des évènements</Bullet>
            <Bullet tab={1}>le V de MVC ;-)</Bullet>
            <Bullet tab={1}>pas de full stack</Bullet>
            <Bullet>Créé en 2011 et open source depuis Mai 2013</Bullet>
            {/*<Bullet>Cible essentiellement les grosses applications JS avec des données qui changent dans le temps</Bullet>*/}
            <Bullet tab={1}>Facebook et applications tierces</Bullet>
            <Bullet tab={1}>Appli. web instagram</Bullet>
            <Bullet tab={1}>15000 composants en production</Bullet>
            <Bullet tab={1}>Beaucoup d'utilisateurs : Netflix, Coursera, reddit, hipchat, yahoo</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Déclaratif</Heading>
          <BulletList>
            <Bullet>Exprimez à quoi doit ressembler votre app. à n’importe
            quel moment dans le temps</Bullet>
            <Bullet>Dès que les données en entrée changent</Bullet>
            <Bullet tab={1}>React va re-rendre entièrement la vue (F5)</Bullet>
            <Bullet tab={1}>Mais n'actualise que les parties qui ont vraiment changées dans le DOM</Bullet>
          </BulletList>
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
            textSize={30}
            lang="javascript"
            source={require("raw!./examples/imperatif.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Code déclaratif</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={require("raw!./examples/declaratif1.example")}
            margin="20px auto" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Code déclaratif</Heading>
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
            <Bullet>React calcule la plus petite liste de changements possible à appliquer à la vue</Bullet>
            <Bullet>Applique les changements en batch dans le DOM</Bullet>
            <Bullet>Dans le cas du bouton favoris</Bullet>
            <Bullet tab={1}>Passer l’étoile en gris</Bullet>
            <Bullet tab={1}>Changer le texte du label</Bullet>
            <Bullet tab={1}>Passer le texte en bleu</Bullet>
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
        {/*<Slide bgColor="primary" textColor="black" align="center top">
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
        </Slide>*/}
        {/*
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
        */}
        <Slide bgColor="#1C1C1C" textColor="black" align="center top">
          <iframe src="http://mathieuancelin.github.io/js-repaint-perfs/"
            frameBorder="0" style={{ marginTop: '50px', width: 856, height: 600, backgroundColor: 'white' }}/>
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
          <Heading size={1} textColor="#252525" caps fit>Hello React</Heading>
          <EditableComponent component={Hello} file="letsreact/examples/hello.js" />
        </Slide>
        {/*<Slide bgColor="primary" textColor="black" align="center top">
          <Image src={images.dafuq.replace('/','')} width="80%" height="80%" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>JSX</Heading>
          <BulletList>
            <Bullet>Séparation des préoccupations ???</Bullet>
            <Bullet tab={1}>la vue ne devrait pas être avec le « contrôleur / composant »</Bullet>
            <Bullet>Ce n’est pas un problème de couplage mais de cohésion</Bullet>
            <Bullet tab={1}>template fortement couplé au « viewModel »</Bullet>
            <Bullet tab={1}>logique de rendu et markup inévitablement couplés</Bullet>
            <Bullet>Séparation des technos, pas des préoccupations</Bullet>
            <Bullet tab={1}>souvent limités, en plus ils faut les apprendre ;-)</Bullet>
            <Bullet tab={2}>{'{{>}}, {{#each}}, [\'...\', \'...\'].join(\'\'), ng-*, etc …'}</Bullet>
            <Bullet tab={1}>on en invente tous les jours ...</Bullet>
          </BulletList>
        </Slide>*/}
        <Slide bgColor="primary">
          <Heading textColor="#252525" caps size={1} fit>Everything is a component</Heading>
          <Heading caps size={2}>even the slides</Heading>
          <Layout>
            <Editor file="letsreact/deck.js" width="100%" height={500}/>
          </Layout>
        </Slide>
        {/*<Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps fit>Votre premier composant</Heading>
          <EditableComponent component={FirstComponent} file="letsreact/examples/firstcomponent.js" />
        </Slide>*/}
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" fit caps>Sources de données</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Props</Heading>
          <BulletList>
            <Bullet>Définies à la création d’une instance de composant</Bullet>
            <Bullet tab={1}>Idéalement immutable</Bullet>
            <Bullet>Peuvent avoir des valeurs par défaut pour faciliter la réutilisation</Bullet>
            <Bullet>Peuvent être validées pour faciliter la réutilisation</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Props</Heading>
          <EditableComponent component={HelloProps} file="letsreact/examples/helloprops.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>State</Heading>
          <BulletList>
            <Bullet>Représente l’état interne d’une instance de composant</Bullet>
            <Bullet tab={1}>l’état est mutable, idéalement par le composant lui-même</Bullet>
            <Bullet>Le changement de l’état lancera la mise à jour de la vue</Bullet>
            <Bullet>Le double data binding est supporté mais non encouragé</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>State</Heading>
          <EditableComponent component={FirstComponentJSX} file="letsreact/examples/firstcomponentjsx.js" />
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Context</Heading>
          <BulletList>
            <Bullet>Représente un object passé implicitement du parent aux enfant</Bullet>
            <Bullet tab={1}>pas sujet au refresh d'interface</Bullet>
            <Bullet>Necéssite de la validation pour pouvoir y accéder</Bullet>
          </BulletList>
        </Slide>
        {/*<Slide bgColor="primary">
          <Heading caps textColor="#252525">Context</Heading>
          <EditableComponent component={Gallery} file="letsreact/examples/gallery.js" />
        </Slide>*/}
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
        <Slide bgColor="primary">
          <Heading caps textColor="#252525">Cycle de vie</Heading>
          <EditableComponent component={HelloLifecycle} file="letsreact/examples/hellolifecycle.js" />
        </Slide>
        <Slide bgColor="primary">
          <Heading caps textColor="#252525">Validation</Heading>
          {/*<CodePane
            textSize={28}
            lang="javascript"
            source={require("raw!./examples/propsvalidation.example")}
            margin="20px auto" />*/}
          <Editor file="letsreact/examples/propsvalidation.example" width="100%" height={500} collapse={false}/>

        </Slide>
        {/*<Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>Mixins</Heading>
          <EditableComponent component={MixinsExample} file="letsreact/examples/mixins.js" />
        </Slide>
        <Slide bgColor="primary">
          <Heading caps fit>The Clicker component</Heading>
          <EditableComponent component={Clicker} file="letsreact/examples/clicker.js" />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Universal apps</Heading>
          <BulletList>
            <Bullet>Le virtual DOM permet de se passer du navigateur</Bullet>
            <Bullet>Possibilité de générer du HTML statique depuis un composant</Bullet>
            <Bullet>Génération côté serveur</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Webcomponents</Heading>
          <BulletList>
            <Bullet>Les WebComponents sont supportés en tant que feuille</Bullet>
            <Bullet>Pas d'exposition possible en tant que WebComponent</Bullet>
            <Bullet tab={1}>L'équipe React travaille à une future intégration</Bullet>
            <Bullet tab={1}>En attendant diverses librairies existent</Bullet>
          </BulletList>
        </Slide>*/}
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Tests</Heading>
          <Editor file="letsreact/examples/tests.example" width="100%" height={500} collapse={false}/>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Ecosystème</Heading>
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
        <Slide bgColor="black">
          <Heading size={1} textColor="white" caps>React Native</Heading>
          <Layout>
            <Fill>
            <Image src={images.reactLogo.replace('/','')} width={400} height={400} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Applications mobile</Heading>
          <BulletList>
            <Bullet>Native</Bullet>
            <Bullet>Web view (PhoneGap, Cordova, etc …)</Bullet>
            <Bullet>Compile to native (Xamarin, etc …)</Bullet>
            <Bullet>Moteur JS (NativeScript, Appcelerator Titanium)</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>React Native</Heading>
          <BulletList>
            <Bullet>Framework pour développer des apps. natives</Bullet>
            <Bullet>Basé sur JS et la librairie React</Bullet>
            <Bullet>N’est pas une plateforme hybride</Bullet>
            <Bullet>N’est pas une réécriture de composants natifs</Bullet>
            <Bullet>N’est pas un « transpiler »</Bullet>
            <Bullet>Permet de scripter des composants natifs en JS</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>React Native n’est pas une webview !!!</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="black" align="center top">
          <Heading size={1} textColor="#252525" caps>React native</Heading>
          <Fill>
            <Image src={images.rn.replace('/','')} width="80%" height="80%" />
          </Fill>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>React Native</Heading>
          <BulletList>
            <Bullet>DX semblable au web</Bullet>
            <Bullet tab={1}>hot reload, écosystème JS (npm, webpack, etc …)</Bullet>
            <Bullet>MAJ en ligne ;-)</Bullet>
            <Bullet>Système de bridge natif pour créer des modules ou des composants utilisables depuis le JS</Bullet>
            <Bullet>Possibilité d’intégration dans une application classique</Bullet>
            <Bullet>Toute l’équipe peut s’occuper de l’application mobile</Bullet>
            <Bullet tab={1}>il est toutefois judicieux de garder des spécialistes</Bullet>
          </BulletList>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Learn once write anywhere</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Démo</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="#252525" caps>Conclusion</Heading>
        </Slide>
      </Deck>
    )
  }
}
