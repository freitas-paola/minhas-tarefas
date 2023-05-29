import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { changeTermo, changeFilter } = filterSlice.actions

export default filterSlice.reducer
