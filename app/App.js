import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native'

import ViewContainer from './components/ViewContainer'
import StatusbarBackground from './components/StatusbarBackground'
import * as firebase from "firebase";



export default class App extends Component {
  constructor(props) {
    super(props);

    var firebaseRef = firebase.initializeApp({
      apiKey: 'AIzaSyCjgZBoyoSTk3huVEl3JnVTwKzgT2uPS1Y',
      authDomain: 'fir-todo-a6a6e.firebaseapp.com',
      databaseURL: 'https://fir-todo-a6a6e.firebaseio.com'
});
  }
    render() {
      return (
          <ViewContainer>
          <StatusbarBackground />

          </ViewContainer>
      )
    }
}
