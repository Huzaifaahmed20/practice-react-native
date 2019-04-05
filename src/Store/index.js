import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../Reducers'
// import reactotron from '../ReactotronConfig'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, applyMiddleware(thunk))
// export const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk), reactotron.createEnhancer())
// )
// const store = createStore(
//   reducers,
//   compose( applyMiddleware(thunk),reactotron.createEnhancer()),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
