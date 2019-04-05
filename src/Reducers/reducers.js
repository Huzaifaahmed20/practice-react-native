export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, token: action.payload.token }
    case 'LOGIN_USER':
      return action.payload
    case 'GET_LIST':
      return action.payload
    default:
      return state
  }
}

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload
    default:
      return state
  }
}
