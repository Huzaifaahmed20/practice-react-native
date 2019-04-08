import client from '../apis/client'
import { AsyncStorage } from 'react-native'
import axios from 'axios'

export const signUpUser = body => async dispatch => {
  const response = await client.post('/user/register', body)
  console.log('TCL: response', response)
  let token = response.data.token
  await AsyncStorage.setItem('token', token)
  dispatch({ type: 'REGISTER_USER', payload: response.data })
}

export const loginUser = body => async dispatch => {
  const response = await client.post('/auth/local', body)
  let token = response.data.token
  await dispatch({ type: 'LOGIN_USER', payload: response.data })
  await AsyncStorage.setItem('token', token)
}

export const getPosts = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  dispatch({ type: 'GET_POSTS', payload: response.data })
}
