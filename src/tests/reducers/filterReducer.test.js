import { getInitialState } from '../../reducers/filterReducer';

describe('get initial state for filterReducer', () => {
	const arrayOfNames = ['name1', 'name2']

	it('should return object with keys equal to names', () => {
		const result = getInitialState(arrayOfNames)

		expect(result).toEqual({
			name1: '',
			name2: '',
		})
	})

})
