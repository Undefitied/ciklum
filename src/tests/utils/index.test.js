import { getDataObjectFromArray, getNormalizedData } from '../../utils'

const array = [
	{ id: { value: 'someId' }, someKey: '123', name: 'yur' },
	{ id: { value: 'idSome' }, someKey: '567', name: 'ouy' },
]

const arrayIds = ['someId', 'idSome']

describe('get object of objects with "id" key from array of objects', () => {

	const result = getDataObjectFromArray(array)

	it('should have keys equal to ids', () => {
		expect(Object.keys(result)).toEqual(
			expect.arrayContaining(
				arrayIds
			)
		)
	})

	it('should have values equal to objects from data', () => {
		expect(Object.values(result)).toEqual(
			expect.arrayContaining(
				array
			)
		)
	})
})

describe('get normalized object with "byId" and "allIds" keys', () => {
	const result = getNormalizedData(array)
	const objectFromArray = getDataObjectFromArray(array)

	it('should have allIds key equal to array of ids', () => {
		expect(result.allIds).toEqual(
			expect.arrayContaining(
				arrayIds
			)
		)
	})

	it('should have "byId" key equal to object getDataObjectFromArray', () => {
		expect(result.byId).toEqual(objectFromArray)
	})

})
