import { configureStore } from '@reduxjs/toolkit'
import { loadState } from '../utils/storage'
import todoSlice from './todo'

const store = configureStore({
  reducer: { todo: todoSlice },
  preloadedState: loadState()
})

export default store
