import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import actionTypes from './actionTypes'

function reducers(state = { name: 'default' }, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { name: action.payload }
    default:
      return state
  }
}

export default function initStore(initialState) {
  const middlewares = [thunk, promise]

  let composeEnhancers =
    process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}
