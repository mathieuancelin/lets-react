import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navigatorios: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  postCount: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color: 'gray',
    marginLeft: 15,
  },
  thumbnail: {
    margin: 10,
    marginLeft: 15,
    width: 40,
    height: 40,
  },
  subredditTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#404749'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#20293F'
  },
  webView: {
    flex: 1,
    backgroundColor: '#A9B0B3',
    flexDirection: 'column',
  }
});
