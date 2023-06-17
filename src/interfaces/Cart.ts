import { Product } from "."

export interface Cart {
	productId: number | string
	userId?: number | string
	quantity: number
	product: Product
}