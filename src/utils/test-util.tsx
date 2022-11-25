import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
// eslint-disable-next-line no-duplicate-imports
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line no-duplicate-imports
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { store, RootState } from '../store'
// As a basic setup, import your same slice reducers
import ticketReducer from '../store/slices/ticketSlice'
import companyReducer from '../store/slices/companySlice'
import filtersReducer from '../store/slices/filtersSlice'
import sortingReducer from '../store/slices/sortingSlice'
import { mockTickets } from './mockTickets'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: typeof store
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      tickets: { tickets: mockTickets, isLoading: false, error: null },
      companies: {
        companies: [
          {
            id: 'all',
            name: 'Все',
            logo: 'string',
            selected: true,
          },
        ],
        isLoading: false,
        error: null,
      },
      filters: {
        transfers: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'].map(
          (name, index) => ({
            name: name,
            type: index,
            checked: true,
          }),
        ),
        search: {
          origin: '',
          destionation: '',
          dateStart: '',
          dateEnd: '',
        },
      },
      sorting: { order: 'cheapest' },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        tickets: ticketReducer,
        companies: companyReducer,
        filters: filtersReducer,
        sorting: sortingReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
