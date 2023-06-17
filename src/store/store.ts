import { configureStore } from '@reduxjs/toolkit'
import cartsSlice from './cartsSlice'

const store = configureStore({
	reducer: {
		carts: cartsSlice
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store