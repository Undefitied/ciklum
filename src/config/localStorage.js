export const loadState = () => {
  try {
    const state = localStorage.getItem('state')

    if (state !== null) {
      return JSON.parse(state)
    }
  } catch (e) {
    console.log('loadState', e.message);
  }
}

export const saveState = (state) => {
  try {
    const stateString = JSON.stringify(state)
    localStorage.setItem('state', stateString)
  } catch (e) {
    console.log('saveState', e.message);
  }
}