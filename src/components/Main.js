import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  ListView
} from 'react-native'
import colors from '../utils/colors'
import ListItem from './ListItem'
import {searchFor} from '../utils/spotifyApi'
import {debounce} from 'lodash'


class Main extends Component {
  constructor() {
    super()
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      artists: dataSource.cloneWithRows(
        [
          {name: 'Apple', images: []},
          {name: 'pen', images: []}
        ]
      )
    }
    this.renderRow = this.renderRow.bind(this)
    this.makeRequest = this.makeRequest.bind(this)
  }
  renderRow(artist,secId,id) {
    const {navigator} = this.props
    const artistState = {
      id: 'ARTIST_DETAIL',
      title: artist.name,
      url: artist.external_urls ? artist.external_urls.spotify : null
    }
    const imageUrl = artist.images[0] ? artist.images[0].url : null
    return (
      <ListItem
        index={id}
        text={artist.name}
        imageUrl={imageUrl}
        navState={artistState}
        navigator={navigator}
      />
    )
  }
  makeRequest(text) {
    searchFor(text)
      .then((artists) => {
        this.setState({
          artists: this.state.artists.cloneWithRows(artists)
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          style={styles.searchBox}
          onChangeText={debounce(this.makeRequest, 200)}
          />
        <ListView
          dataSource={this.state.artists}
          style={styles.listView}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  searchBox: {
    height: 40,
    width: 300,
    borderColor: colors.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800'
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch'
  }
})


export default Main
