import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: { order: string } = { order: 'cheapest' }

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeSortingOrder: (state, { payload }: PayloadAction<string>) => {
      state.order = payload
    },
  },
})

export const sortingSelector = (state: RootState) => state.sorting

export const { changeSortingOrder } = sortingSlice.actions

export default sortingSlice.reducer
