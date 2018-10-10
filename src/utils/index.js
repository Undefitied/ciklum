export const getDataObjectFromArray = (data) => data.reduce((result, item) => {
  result[item.id.value] = item

  return result
}, {})

export const getNormalizedData = data => {
  const byId = getDataObjectFromArray(data)
  const allIds = Object.keys(byId)

  return {
    byId,
    allIds,
  }
}
