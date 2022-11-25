import { Filters, Transfers } from '../../types/Filters'
import reducer, { changeTransfer, changeSearchField } from './filtersSlice'

const initialTransfers: Transfers[] = [
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
].map((name, index) => ({
  name: name,
  type: index,
  checked: true,
}))

const initialState: Filters = {
  transfers: initialTransfers,
  search: {
    origin: '',
    destionation: '',
    dateStart: '',
    dateEnd: '',
  },
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ ...initialState })
})

test('should set orgin field', () => {
  const previousState: Filters = initialState
  const expectedState: Filters = {
    transfers: [...previousState.transfers],
    search: { ...previousState.search, origin: 'SPB' },
  }

  expect(reducer(previousState, changeSearchField({ type: 'origin', value: 'SPB' }))).toEqual(
    expectedState,
  )
})

test('should change transfer checked', () => {
  const previousState: Filters = initialState
  const changedTransfers = [...initialTransfers]
  changedTransfers[3] = { name: '3 пересадки', type: 3, checked: false }
  const expectedState: Filters = {
    transfers: changedTransfers,
    search: { ...initialState.search },
  }

  expect(reducer(previousState, changeTransfer(3))).toEqual(expectedState)
})
