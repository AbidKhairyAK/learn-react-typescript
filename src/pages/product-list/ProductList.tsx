import { ReactElement } from "react"

import { getProductList } from "@/services/productService.ts"
import { H2 } from "@/components/ui/Typography"

import ProductItem from "./components/product-item/ProductItem"

export default function ProductList() : ReactElement {
	const { products } = getProductList()

	return <>
		<H2 className="mb-6">Product List</H2>

		<section className="grid grid-cols-4 gap-8">
			{products.map(product =>
				<ProductItem key={product.id} product={product} />
			)}
		</section>
	</>
}