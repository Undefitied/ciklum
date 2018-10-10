
export const filterById = (idList, idExclude) =>
	idList.filter(listedPersonId => listedPersonId !== idExclude)

export const getStateAfterMoveRight = (crewStore, personId) => {
	const overwriteState = {};

	if (crewStore.appliedIds.indexOf(personId) !== -1) {
		overwriteState.appliedIds = filterById(crewStore.appliedIds, personId)
		overwriteState.interviewingIds = [ ...crewStore.interviewingIds, personId ]

	} else if (crewStore.interviewingIds.indexOf(personId) !== -1) {
		overwriteState.interviewingIds = filterById(crewStore.interviewingIds, personId)
		overwriteState.hiredIds = [ ...crewStore.hiredIds, personId ]

	}

	return overwriteState
}

export const getStateAfterMoveLeft = (crewStore, personId) => {
	const overwriteState = {};

	if (crewStore.hiredIds.indexOf(personId) !== -1) {
		overwriteState.hiredIds = filterById(crewStore.hiredIds, personId)
		overwriteState.interviewingIds = [ ...crewStore.interviewingIds, personId ]

	} else if (crewStore.interviewingIds.indexOf(personId) !== -1) {
		overwriteState.interviewingIds = filterById(crewStore.interviewingIds, personId)
		overwriteState.appliedIds = [ ...crewStore.appliedIds, personId ]

	}

	return overwriteState
}

export const getFilteredCrew = (crewObject, nameValue, cityValue) =>
	Object.values(crewObject).filter(person => {
		const filterByName = person.name.first.indexOf(nameValue) !== -1
			|| person.name.last.indexOf(nameValue) !== -1

		const filterByCity = person.location.city.indexOf(cityValue) !== -1

		return filterByName && filterByCity
	})
