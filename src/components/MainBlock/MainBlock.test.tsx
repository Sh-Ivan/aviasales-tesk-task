import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainBlock from './MainBlock'
import { renderWithProviders } from '../../utils/test-util'
import { mockTickets } from '../../utils/mockTickets'
import { fetchTickets } from '../../store/slices/ticketSlice'

const server = setupServer(
  rest.get('/tickets', (req, res, ctx) => {
    return res(ctx.json(mockTickets))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Show more tickets', async () => {
  renderWithProviders(<MainBlock />)
  expect(screen.getByText('4 100 Р')).toBeInTheDocument()
  fireEvent.click(screen.getByText('показать еще 5 билетов'))
  await waitFor(() => screen.getByText('12 300 Р'))
  expect(screen.getByText('20 700 Р')).toBeInTheDocument()
})
