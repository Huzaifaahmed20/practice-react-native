import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MainHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#152534',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25
  }
})
