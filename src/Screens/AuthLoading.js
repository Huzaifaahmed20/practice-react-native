import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default class AuthLoading extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator />
        <Text> textInComponent </Text>
      </View>
    )
  }
}
