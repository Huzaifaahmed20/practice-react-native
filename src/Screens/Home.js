import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> HOME </Text>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('token')
            this.props.navigation.navigate('LoginScreen')
          }}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
