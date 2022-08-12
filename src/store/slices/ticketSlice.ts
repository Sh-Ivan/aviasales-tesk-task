import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../'
import TicketService from '../../services/ticketService'
import { Ticket } from '../../types/Ticket'

export const fetchTickets = createAsyncThunk<
  Ticket[],
  void,
  {
    rejectValue: string
  }
>('tickets/getTickets', async (_, thunkAPI) => {
  try {
    const response = await TicketService.getTickets()

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Error fetching tickets')
  }
})

interface TicketState {
  tickets: Ticket[]
  isLoading: boolean
  error: string | null
}

const initialState: TicketState = {
  tickets: [] as Ticket[],
  isLoading: false,
  error: null,
}

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, { payload }: PayloadAction<Ticket[]>) => {
      state.tickets = payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(fetchTickets.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchTickets.rejected, (state, { payload }) => {
      state.tickets = [] as Ticket[]
      state.isLoading = false
      state.error = payload || 'Error fetching tickets'
    })
  },
})

export const ticketSelector = (state: RootState) => state.tickets

export default ticketSlice.reducer
