import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './reducers/tasks'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
