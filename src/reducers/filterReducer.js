import { ACTIONS, FILTERS } from '../constants';

const getInitialState = () => Object.values(FILTERS)
  .reduce((result, filterName) => {
    result[filterName] = ''

    return result
  }, {})

const crew = (state = getInitialState(), action) => {
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
