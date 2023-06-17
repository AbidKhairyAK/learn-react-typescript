import { ReactElement } from "react";

import { H2, H3 } from "@/components/ui/Typography";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAppSelector } from "@/hooks";
import { Cart } from "@/interfaces";
import useCart from "@/hooks/useCart";

export default function CartList () : ReactElement {
	const carts = useAppSelector(state => state.carts)
	const { removeFromCart } = useCart()

	const handleRemoveCart = (productId: Cart['productId']) => () => removeFromCart(productId)

	return <>
		<H2 className="mb-6">Cart List</H2>

		<section className="grid gap-6">
			{carts.map(cart =>
				<Card key={cart.productId}
					className="flex overflow-hidden">
					<img
						src={cart.product.images[0]}
						alt={cart.product.title}
						className="object-cover aspect-square h-36" />

					<CardHeader className="flex-grow">
						<CardTitle>{cart.product.title}</CardTitle>
						<CardDescription>Quantity: {cart.quantity}</CardDescription>
						<H3 className="pt-2">${cart.product.price}</H3>
					</CardHeader>

					<CardHeader>
						<Button
							size="lg"
							onClick={handleRemoveCart(cart.productId)}>
							Remove
						</Button>
					</CardHeader>
				</Card>
			)}
		</section>
	</>
}