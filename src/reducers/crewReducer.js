import { ACTIONS } from '../constants';

const getInitialState = () => ({
  isLoading: true,
  data: null,
  errorId: null,
})

const crew = (state = getInitialState(), action) => {
  switch (action.type) {

    case ACTIONS.FETCH_CREW_START:
      return {
        ...state,
        isLoading: true,
      }

    case ACTIONS.FETCH_CREW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      }

    case ACTIONS.FETCH_CREW_FAIL:
      return {
        ...state,
        isLoading: false,
        errorId: action.errorId,
      }

    default:
      return state
  }
}

export default crew
