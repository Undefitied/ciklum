import { ACTIONS, FILTERS } from '../constants';

export const getInitialState = (arrayOfNames) => arrayOfNames
  .reduce((result, filterName) => {
    result[filterName] = ''

    return result
  }, {})

const initialState =  getInitialState(
	Object.values(FILTERS)
)

const crew = (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.SET_FILTER:
      return {
        ...state,
        [action.name]: action.value,
      }

    case ACTIONS.SET_STORE:
      return action.store

    default:
      return state
  }
}

export default crew
