import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "@/interfaces";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { H4 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import useCart from "@/hooks/useCart";

interface Props {
	product: Product
}

export default function ProductItem ({ product } : Props) : ReactElement {
	const navigate = useNavigate()
	const { addToCart } = useCart()

	const toProductDetail = () : void => {
		navigate('/products/' + product.id)
	}

	const handleAddCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
		event.stopPropagation()
		addToCart(product)
	}

	return <Card onClick={toProductDetail}
		className="overflow-hidden cursor-pointer hover:border-slate-400 transition-all duration-200">
		<img
			src={product.images && product.images[0]}
			alt={product.title}
			className="w-full aspect-square object-cover" />
		<CardHeader>
			<CardTitle>{product.title}</CardTitle>
			<CardDescription
				title={product.description}
				className="truncate h-6">
				{product.description}
			</CardDescription>
		</CardHeader>
		<CardFooter className="flex justify-between">
			<H4>${product.price}</H4>
			<Button onClick={handleAddCart}>
				Add to Cart
			</Button>
		</CardFooter>
	</Card>
}