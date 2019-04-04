import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialAppState from './initAppState'
import rootReducer from './reducers'

const reducers = combineReducers({
	rootState: rootReducer
})

 const state = (initialState = initialAppState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
export default state