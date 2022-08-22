import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ticketReducer from './slices/ticketSlice'
import companyReducer from './slices/companySlice'

export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    companies: companyReducer,
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
