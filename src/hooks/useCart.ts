import Swal from 'sweetalert2'

import { Cart, Product } from "@/interfaces";
import { useAppDispatch } from "@/hooks";
import { addCart, removeCart } from "@/store/cartsSlice";
import { useNavigate } from "react-router-dom";

export default function useCart () {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const addToCart = async (product: Product): Promise<void> => {
		const payload: Cart = {
			productId: product.id,
			quantity: 1,
			product
		}

		dispatch(addCart(payload))

		const result = await Swal.fire({
			title: 'Added to cart',
			icon: 'success',
			text: 'Product successfully added to the cart',
			showCloseButton: true,
			showCancelButton: true,
			confirmButtonText: 'Show Cart',
			cancelButtonText: 'OK'
		})

		if (result.isConfirmed) navigate('/carts')
	}

	const removeFromCart = async (productId: Cart['productId']) => {
		const confirmDialog = await Swal.fire({
			title: 'Are You Sure?',
			text: 'Are you sure to remove this product from your cart',
			icon: 'question',
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: 'Remove from cart',
		})

		if (!confirmDialog.isConfirmed) return

		dispatch(removeCart(productId))

		Swal.fire({
			title: 'Product Removed',
			text: 'Product removed successfully from your cart',
			icon: 'success'
		})
	}

	return { addToCart, removeFromCart }
}