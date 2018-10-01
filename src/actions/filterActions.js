import { ACTIONS } from '../constants';

export const setFilter = (name, value) => ({
  type: ACTIONS.SET_FILTER,
  name,
  value
})

export const setStore = store => ({
  type: ACTIONS.SET_STORE,
  store
})
