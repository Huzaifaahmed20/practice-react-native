/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  AsyncStorage,
  Text,
  ActivityIndicator
} from 'react-native'
import { Provider } from 'react-redux'
import { store } from './Store'
import  RootNavigator  from './Routes'

// import Home from './Routes'

export default class App extends Component {
  state = {
    res: ''
  }
  // componentDidMount() {
  //   AsyncStorage.getItem('token').then(res => {
  //     this.setState({ res })
  //   })
  // }
  render() {
    // const Layout = rootNavigator(this.state.res !== null ? true : false)
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
