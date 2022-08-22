import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import TicketService from '../../services/ticketService'
import { Company } from '../../types/Company'

export const fetchCompanies = createAsyncThunk<
  Company[],
  void,
  {
    rejectValue: string
  }
>('tickets/getCompanies', async (_, thunkAPI) => {
  try {
    const response = await TicketService.getCompanies()

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Error fetching companies')
  }
})

interface CompanyState {
  companies: Company[]
  isLoading: boolean
  error: string | null
}

const initialState: CompanyState = {
  companies: [] as Company[],
  isLoading: false,
  error: null,
}

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }: PayloadAction<Company[]>) => {
      state.companies = payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(fetchCompanies.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCompanies.rejected, (state, { payload }) => {
      state.companies = [] as Company[]
      state.isLoading = false
      state.error = payload || 'Error fetching companies'
    })
  },
})

export const companySelector = (state: RootState) => state.companies

export default companySlice.reducer
