import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App'

export default class firebaseTodo extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('firebaseTodo', () => firebaseTodo);
