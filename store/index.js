import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(thunk)
  let store =  createStore(rootReducer, initialState, compose(createStoreWithMiddleware))
  if(process.env.NODE_ENV === 'development'){
    store = createStore(rootReducer, initialState, composeWithDevTools(createStoreWithMiddleware))
  }

  return store
}
