import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware, routerMiddleware(browserHistory))
  )
}
