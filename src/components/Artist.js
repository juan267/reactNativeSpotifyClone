import React, {Component} from 'react'
import {
  View,
  WebView,
  StyleSheet
} from 'react-native'
import colors from '../utils/colors'


class Artist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          onLoadEnd={this.loadFinish}
          startInLoadingState={true}
          onNavigationStateChange={this.onNavigationStateChange}
          style={{flex: 1}}
          source={{
            uri: this.props.url,
            method: 'GET'
          }}
        />
      </View>
    )
  }
}


Artist.propTypes = {
  url: React.PropTypes.string,
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderLeftColor: colors.black,
    borderLeftWidth: 1,
    flex: 1,
    marginTop: 64,
  }
})



export default Artist
