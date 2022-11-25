import reducer, { changeSortingOrder } from './sortingSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ order: 'cheapest' })
})

test('should change sorting order', () => {
  const previousState: { order: string } = { order: 'cheapest' }

  expect(reducer(previousState, changeSortingOrder('fastest'))).toEqual({ order: 'fastest' })
})
