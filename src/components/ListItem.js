import React, {Component} from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import colors from '../utils/colors'

const placeholder = require('../assets/placeholder.jpg');

const ListItem = ({navigator, navState, imageUrl, text}) => {
  let image
  if (imageUrl) {
    image = {uri: imageUrl}
  } else {
    image = placeholder
  }
  return (
    <TouchableOpacity
      underlayColor={ colors.gray }
      onPress={() => navigator.push(navState)}
    >
      <View style={styles.mediaObject}>
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={ styles.text }>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    backgroundColor: colors.gray,
    width: 40,
    height: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  text: {
    flex: 1
  }
})

export default ListItem
