import { ACTIONS } from '../constants';
import { getNormalizedData } from '../utils';
import { getStateAfterMoveLeft, getStateAfterMoveRight } from '../utils/filters';

const getInitialState = () => ({
  isLoading: true,
  data: null,
  errorId: null,
  appliedIds: [],
  interviewingIds: [],
  hiredIds: [],
})

const crew = (state = getInitialState(), action) => {
  let overwriteState

  switch (action.type) {

    case ACTIONS.FETCH_CREW_START:
      return {
        ...state,
        isLoading: true,
      }

    case ACTIONS.FETCH_CREW_SUCCESS:
      const data = getNormalizedData(action.data)

      return {
        ...state,
        isLoading: false,
        data,
        appliedIds: data.allIds,
      }

    case ACTIONS.FETCH_CREW_FAIL:
      return {
        ...state,
        isLoading: false,
        errorId: action.errorId,
      }

    case ACTIONS.MOVE_RIGHT:
			overwriteState = getStateAfterMoveRight(state, action.person.id.value)

      return {
        ...state,
        ...overwriteState
      }

    case ACTIONS.MOVE_LEFT:
			overwriteState = getStateAfterMoveLeft(state, action.person.id.value)

      return {
        ...state,
        ...overwriteState
      }


    default:
      return state
  }
}

export default crew
