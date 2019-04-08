import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Welcome extends Component {
  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen')
  }
  goToSignup = () => {
    this.props.navigation.navigate('SignUpScreen')
  }
  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.logoStyle}
          source={require('../Assets/logo.png')}
        />
        <Text style={styles.welcomeText}> WELCOME </Text>
        <View style={styles.buttonCont}>
          <TouchableOpacity onPress={this.goToLogin} style={styles.buttons}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSignup} style={styles.buttons}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  logoStyle: {
    marginVertical: 50,
    height: 150,
    width: 150
  },
  welcomeText: {
    marginTop: 40,
    fontSize: 30
  },
  buttonCont: {
    flexDirection: 'row',
    marginTop: 200
  },
  buttons: {
    marginHorizontal: 30,
    backgroundColor: '#376bff',
    // marginVertical: 30,
    paddingVertical: 15,
    width: 150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }
})
