import { combineReducers } from 'redux'
import { userReducer, postsReducer } from './reducers'

export default combineReducers({
  user: userReducer,
  posts: postsReducer
})
