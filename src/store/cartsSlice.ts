import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Cart } from "@/interfaces"

const initialState = [] as Cart[]

const cartsSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		setCart (state, action: PayloadAction<Cart[]>) {
			return action.payload
		},
		addCart(state, action: PayloadAction<Cart>) {
			const cartIndex = state.findIndex(item => item.productId === action.payload.productId)
			if (cartIndex > -1) state[cartIndex].quantity += action.payload.quantity
			else state.push(action.payload)
		},
		removeCart (state, action: PayloadAction<Cart['productId']>) {
			const cartIndex = state.findIndex(item => item.productId === action.payload)
			if (cartIndex > -1) state.splice(cartIndex, 1)
		},
		resetCart () {
			return initialState
		},
	}
})

export const { setCart, addCart, removeCart, resetCart } = cartsSlice.actions
export default cartsSlice.reducer