import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle'
import isEqual from 'lodash/isEqual'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'
import { setStore } from '../actions/filterActions';

const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      logger,
    )
  )
)


store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

window.addEventListener('storage', throttle(() => {
  const loadedState = loadState()
  const isEqualResult = isEqual(loadedState.filters, store.getState().filters)

  if (!isEqualResult) {
    store.dispatch(setStore(loadedState.filters))
  }
}, 1000))

export default store
