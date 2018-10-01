import { ACTIONS } from '../constants';

export const setFilter = (name, value) => ({
  type: ACTIONS.SET_FILTER,
  name,
  value
})