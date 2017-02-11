import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class ViewContainer extends Component {
    render() {
      return (
          <View style={styles.ViewContainer}>

          </View>
      )
    }
}

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'mistyrose'
  }
})