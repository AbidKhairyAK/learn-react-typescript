import { ReactElement } from "react";

import { H1, H2, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Product } from "@/interfaces";
import useCart from "@/hooks/useCart";

interface Props {
	product: Product
}

export default function ProductDescription ({ product } : Props) : ReactElement {
	const { addToCart } = useCart()

	const handleAddCart = () : Promise<void> => addToCart(product)

	return <section>
		<H2 className="mb-4">{product.title}</H2>
		<P className="mb-12 leading-loose w-full max-w-lg">{product.description}</P>
		<H1 className="mb-8">${product.price}</H1>
		<Button
			onClick={handleAddCart}
			size="lg"
			className="text-lg py-6">
			Add to Cart
		</Button>
	</section>
}