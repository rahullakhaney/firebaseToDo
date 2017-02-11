import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import ViewContainer from './components/ViewContainer'
import StatusbarBackground from './components/StatusbarBackground'

export default class App extends Component {
    render() {
      return (
          <ViewContainer>
          <StatusbarBackground />
            <Text>
            Hello World
            </Text>
          </ViewContainer>
      )
    }
}
