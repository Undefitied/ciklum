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

    default:
      return state
  }
}

export default crew
