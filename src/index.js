import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Main from './components/Main'
import Artist from './components/Artist'
import NavigationBar from './components/NavigationBar'

class spotify extends Component {
  renderScene(route, navigator) {
    if (route.id === "MAIN") {
      return (<Main navigator={navigator}/>)
    }

    return (
      <Artist url={route.url}/>
    )
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{id: 'MAIN', title: 'Spotify'}}
        renderScene={this.renderScene}
        navigationBar={NavigationBar}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default spotify
