import { combineReducers } from 'redux'

import crew from './crewReducer'
import filters from './filterReducer'

export default combineReducers({
  crew,
  filters,
})
