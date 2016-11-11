import React, {Component} from 'react'
import {
  TouchableOpacity,
  Text,
  Navigator,
  StyleSheet
} from 'react-native'
import colors from '../utils/colors'

const navigationBar = {
  LeftButton(route, navigator) {
    if (route.id === 'MAIN') {
      // No hacemos nada
      return null
    }

    return (
      <TouchableOpacity
        // Nos devolvemos
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}
      >
        <Text
          style={[styles.navBarText, styles.navBarButtonText]}
        >
          Back
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton(route, navigator) {
    return null
  },
  Title(route) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.blue,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.white,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
})

export default (
  <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={navigationBar}
  />
)
