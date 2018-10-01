
export const ACTIONS = {
  FETCH_CREW_START: 'FETCH_CREW_START',
  FETCH_CREW_SUCCESS: 'FETCH_CREW_SUCCESS',
  FETCH_CREW_FAIL: 'FETCH_CREW_FAIL',

  SET_FILTER: 'SET_FILTER',

  SET_STORE: 'SET_STORE', //experimental
}

export const URLS = {
  CREW_LIST: 'https://randomuser.me/api/?nat=gb&results=5',
}

export const FIELDS = {
  RESULTS: 'results',
}

export const FILTERS = {
  NAME: 'name',
  CITY: 'city',
}

export const FILTERS_LABELS = {
  [FILTERS.NAME]: 'Name',
  [FILTERS.CITY]: 'City',
}
