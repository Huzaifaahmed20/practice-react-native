import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Error = ({ message }) => {
	console.log("TCL: Error -> message", message)
  return (
    <View>
      <Text style={styles.errorTextStyle}>{message}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  errorTextStyle: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  }
})
