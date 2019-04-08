import React, { Component } from 'react'
import { View, ActivityIndicator,AsyncStorage } from 'react-native'

export default class AuthLoading extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then(res => {
      this.props.navigation.navigate(res ? 'HomeStack' : 'Auth')
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }
}
