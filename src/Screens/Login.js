import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import { loginUser } from '../Action'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ValidationComponent from 'react-native-form-validator'
import { Error } from '../Components/Error'

class Login extends ValidationComponent {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async () => {
    this.validate({
      email: { email: true, required: true },
      password: { required: true }
    })
    const { navigation } = this.props
    const { navigate } = navigation
    await this.props.loginUser(this.state)
    await navigate('HomeScreen')
  }

  goToSignUp = () => {
    this.props.navigation.navigate('SignUpScreen')
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
            style={{ width: '80%', color: '#376bff', marginVertical: 20 }}
            placeholder='Email'
            value={this.state.email}
            underlineColorAndroid={'#000000'}
            placeholderTextColor={'#000000'}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={{ width: '80%', color: '#376bff' }}
            placeholder='Password'
            value={this.state.password}
            secureTextEntry
            underlineColorAndroid={'#000000'}
            placeholderTextColor={'#000000'}
            onChangeText={password => this.setState({ password })}
          />

          <Error message={this.getErrorMessages() || this.props.message} />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
          // style={styles.forgotText}
          // onPress={this.handleSubmit}
          >
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ color: '#000' }}>Don't Have an Account? </Text>
            <TouchableOpacity onPress={this.goToSignUp}>
              <Text style={{ color: '#376bff' }}> CREATE NOW</Text>
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  forgotText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    message: user.message
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
