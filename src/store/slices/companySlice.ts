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
}

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeCompanyFilter: (state, { payload }: PayloadAction<string>) => {
      state.companies = state.companies.map((company) => {
        company.selected = company.id === payload
        return company
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }: PayloadAction<Company[]>) => {
      state.companies = initialState.companies.concat(payload)
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

export const { changeCompanyFilter } = companySlice.actions

export default companySlice.reducer
