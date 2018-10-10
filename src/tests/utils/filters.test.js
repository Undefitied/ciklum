import { filterById, getFilteredCrew, getStateAfterMoveLeft, getStateAfterMoveRight } from '../../utils/filters';

describe('filters', () => {
	const idList = ['id1', 'id2', 'id3']
	const result = filterById(idList, 'id2')

	it('should accept array of Ids and crew and return it without excludeId', () => {
		expect(result).toEqual(
			expect.arrayContaining(
				['id1', 'id3']
			)
		)
	})

})

describe('crew\'s moving left and right', () => {

	const crewStore = {
		appliedIds: ['id1', 'id2', 'id3'],
		interviewingIds: ['id4', 'id5', 'id6'],
		hiredIds: ['id7', 'id8', 'id9'],
	}

	it('should move applied to interviewing', () => {
		expect(
			getStateAfterMoveRight(crewStore, 'id1')
		).toEqual({
			appliedIds: ['id2', 'id3'],
			interviewingIds: ['id4', 'id5', 'id6', 'id1'],
		})
	})

	it('should move interviewing to hired', () => {
		expect(
			getStateAfterMoveRight(crewStore, 'id4')
		).toEqual({
			interviewingIds: ['id5', 'id6'],
			hiredIds: ['id7', 'id8', 'id9', 'id4'],
		})
	})

	it('should move hired to interviewing', () => {
		expect(
			getStateAfterMoveLeft(crewStore, 'id7')
		).toEqual({
			interviewingIds: ['id4', 'id5', 'id6', 'id7'],
			hiredIds: ['id8', 'id9'],
		})
	})

	it('should move interviewing to applied', () => {
		expect(
			getStateAfterMoveLeft(crewStore, 'id4')
		).toEqual({
			appliedIds: ['id1', 'id2', 'id3', 'id4'],
			interviewingIds: ['id5', 'id6'],
		})
	})
})

describe('filter crew by name and city', () => {
	const crewObject = {
		'id1': {
			name: {
				first: 'dave',
				last: 'ron',
			},
			location: {
				city: 'loscity',
			},
		},
		'id2': {
			name: {
				first: 'damir',
				last: 'bon',
			},
			location: {
				city: 'lostown',
			},
		},
	}

	it('should filter by name and return single result', () => {
		expect(
			getFilteredCrew(crewObject, 'dav', '')
		).toEqual(
			[ crewObject.id1 ]
		)
	})

	it('should filter by name and return multiple result', () => {
		expect(
			getFilteredCrew(crewObject, 'da', '')
		).toEqual(
			Object.values(crewObject)
		)
	})

	it('should filter by city and return single result', () => {
		expect(
			getFilteredCrew(crewObject, '', 'town')
		).toEqual(
			[ crewObject.id2 ]
		)
	})

	it('should filter by city and return multiple result', () => {
		expect(
			getFilteredCrew(crewObject, '', 'los')
		).toEqual(
			Object.values(crewObject)
		)
	})

	it('should filter by name and city and return single result', () => {
		expect(
			getFilteredCrew(crewObject, 'da', 'town')
		).toEqual(
			[ crewObject.id2 ]
		)
	})

	it('should filter by name and city and return multiple result', () => {
		expect(
			getFilteredCrew(crewObject, 'da', 'los')
		).toEqual(
			Object.values(crewObject)
		)
	})
})
