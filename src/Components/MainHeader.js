import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class MainHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <View style={styles.header}>
        {/* <Icon
          style={styles.iconStyle}
          name='angle-left'
          size={20}
          color='#fff'
        /> */}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: '#152534',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25
  },
  // iconStyle: {
  //   paddingRight: 100
  // }
})
