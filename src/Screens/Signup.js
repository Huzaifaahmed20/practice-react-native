import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { signUpUser } from '../Action'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Icon from "react-native-vector-icons/FontAwesome";

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = async () => {
    const { signUpUser, navigation } = this.props
    const { navigate } = navigation
    await signUpUser(this.state)
    await navigate('DasboardScreen')
  }

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen')
  }
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <Image
            style={styles.logoStyle}
            source={require('../Assets/logo.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder='User Name'
            value={this.state.name}
            underlineColorAndroid={'#000000'}
            placeholderTextColor={'#000000'}
            onChangeText={name => this.setState({ name })}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Email'
            value={this.state.email}
            underlineColorAndroid={'#000000'}
            placeholderTextColor={'#000000'}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            value={this.state.password}
            underlineColorAndroid={'#000000'}
            placeholderTextColor={'#000000'}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style={styles.forgotText}>
            By clicking this form you agree with our
          </Text>
          <TouchableOpacity>
            <Text style={styles.termsText}>Terms And Conditions</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ color: '#000' }}>Already Have an Account? </Text>
            <TouchableOpacity onPress={this.goToLogin}>
              <Text style={{ color: '#376bff' }}> LOGIN HERE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
    // justifyContent: "center"
  },
  logoStyle: {
    marginVertical: 50,
    height: 150,
    width: 150
  },
  buttonContainer: {
    backgroundColor: '#376bff',
    marginVertical: 30,
    paddingVertical: 15,
    width: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  textInput: {
    marginVertical: 5,
    width: '80%',
    color: '#376bff'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  forgotText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400'
  },
  termsText: {
    color: '#376bff',
    textAlign: 'center',
    fontWeight: '700',
    textDecorationLine: 'underline'
  }
})

export default connect(
  null,
  { signUpUser }
)(Signup)
