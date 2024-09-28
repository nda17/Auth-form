import { reducers } from '@/store/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: reducers,
	devTools: true
})
