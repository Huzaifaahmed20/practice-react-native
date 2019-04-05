import client from '../apis/client'
import { AsyncStorage } from 'react-native'

export const signUpUser = body => async dispatch => {
  const response = await client.post('/user/register', body)
  let token = response.data.token
  await AsyncStorage.setItem('token', token)
  dispatch({ type: 'REGISTER_USER', payload: response.data })
}

export const loginUser = body => async dispatch => {
  const response = await client.post('/auth/local', body)
	console.log("TCL: response", response)
  let token = response.data.token
  await AsyncStorage.setItem('token', token)
  dispatch({ type: 'LOGIN_USER', payload: response.data })
}
