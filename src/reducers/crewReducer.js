import { ACTIONS } from '../constants';
import { getNormalizedData } from '../utils';

const getInitialState = () => ({
  isLoading: true,
  data: null,
  errorId: null,
  appliedIds: [],
  interviewingIds: [],
  hiredIds: [],
})

const filterById = (idList, idExclude, crew) =>
  idList.filter(listedPersonId => {
    const listedPerson = crew[listedPersonId]

    return listedPerson.id.value !== idExclude
  })

const crew = (state = getInitialState(), action) => {
  let overwriteState
  let personId

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
      overwriteState = {}
      personId = action.person.id.value

      if (state.appliedIds.indexOf(personId) !== -1) {
        overwriteState.appliedIds = filterById(state.appliedIds, personId, state.data.byId)
        overwriteState.interviewingIds = [ ...state.interviewingIds, personId ]

      } else if (state.interviewingIds.indexOf(personId) !== -1) {
        overwriteState.interviewingIds = filterById(state.interviewingIds, personId, state.data.byId)
        overwriteState.hiredIds = [ ...state.hiredIds, personId ]

      }

      return {
        ...state,
        ...overwriteState
      }

    case ACTIONS.MOVE_LEFT:
      overwriteState = {}
      personId = action.person.id.value

      if (state.hiredIds.indexOf(personId) !== -1) {
        overwriteState.hiredIds = filterById(state.hiredIds, personId, state.data.byId)
        overwriteState.interviewingIds = [ ...state.interviewingIds, personId ]

      } else if (state.interviewingIds.indexOf(personId) !== -1) {
        overwriteState.interviewingIds = filterById(state.interviewingIds, personId, state.data.byId)
        overwriteState.appliedIds = [ ...state.appliedIds, personId ]

      }

      return {
        ...state,
        ...overwriteState
      }


    default:
      return state
  }
}

export default crew
