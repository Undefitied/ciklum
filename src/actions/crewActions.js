import axios from 'axios'
import { ACTIONS, URLS } from '../constants'

const fetchCrewStart = () => ({
  type: ACTIONS.FETCH_CREW_START,
})

const fetchCrewSuccess = data => ({
  type: ACTIONS.FETCH_CREW_SUCCESS,
  data,
})

const fetchCrewFail = (errorId = true) => ({
  type: ACTIONS.FETCH_CREW_FAIL,
  errorId
})

export const fetchCrewList = () => dispatch => {
  dispatch(fetchCrewStart())

  axios.get(URLS.CREW_LIST)
    .then(response => response.data)
    .then(response =>
      dispatch(fetchCrewSuccess(response.results))
    )
    .catch(error =>
      dispatch(fetchCrewFail(error.message))
    )
}

export const moveLeft = person => ({
  type: ACTIONS.MOVE_LEFT,
  person,
})

export const moveRight = person => ({
  type: ACTIONS.MOVE_RIGHT,
  person,
})
