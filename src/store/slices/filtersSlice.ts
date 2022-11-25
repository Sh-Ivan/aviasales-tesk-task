import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Filters, SearchTypes, Transfers } from '../../types/Filters'

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

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeTransfer: (state, { payload }: PayloadAction<number>) => {
      state.transfers = state.transfers.map((transfer) => {
        transfer.checked = transfer.type !== payload ? transfer.checked : !transfer.checked
        return transfer
      })
    },
    changeSearchField: (
      state,
      { payload }: PayloadAction<{ type: SearchTypes; value: string }>,
    ) => {
      state.search[payload.type] = payload.value
    },
  },
})

export const transersSelector = (state: RootState) => state.filters.transfers
export const searchSelector = (state: RootState) => state.filters.search

export const { changeTransfer, changeSearchField } = filtersSlice.actions

export default filtersSlice.reducer
