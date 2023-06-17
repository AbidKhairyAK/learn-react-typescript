import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import { getProductDetail } from "@/services/productService";
import { P } from "@/components/ui/Typography";

import ProductImages from "./sections/product-images/ProductImages";
import ProductDescription from "./sections/product-description/ProductDescription";

export default function ProductDetail () : ReactElement {
	const { productId = '' } = useParams()
	const { product, isLoading } = getProductDetail(productId)

	if (isLoading) return <P>Loading</P>

	return <main className="grid grid-cols-2 gap-12">
		<ProductImages product={product} />
		<ProductDescription product={product} />
	</main>
}