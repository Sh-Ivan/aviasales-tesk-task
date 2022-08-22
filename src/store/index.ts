import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ticketReducer from './slices/ticketSlice'
import companyReducer from './slices/companySlice'
import filtersReducer from './slices/filtersSlice'
import sortingReducer from './slices/sortingSlice'

export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    companies: companyReducer,
    filters: filtersReducer,
    sorting: sortingReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
