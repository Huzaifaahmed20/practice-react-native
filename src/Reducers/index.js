import { combineReducers } from 'redux'

const initialState = {
  token: null
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, token: action.payload.token }
    case 'LOGIN_USER':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  user: userReducer
})
