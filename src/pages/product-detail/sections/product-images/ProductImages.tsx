import { ReactElement, useEffect, useState } from "react";
// @ts-ignore
import { SideBySideMagnifier } from "react-image-magnifiers"

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib";
import { Product } from "@/interfaces";

interface Props {
	product: Product
}

export default function ProductImages ({ product } : Props) : ReactElement {

	const [activeImage, setActiveImage] = useState<string>('')

	useEffect((): void => {
		if (product.images) setActiveImage(product.images[0])
	}, [product.id])

	return <section className="grid grid-cols-4 gap-4">
		<div className="grid gap-4">
			{product.images.map(image =>
				<Card key={image}
					onClick={() => setActiveImage(image)}
					className={cn(
						"overflow-hidden cursor-pointer",
						image === activeImage && 'border-4 border-gray-500'
					)}>
					<img
						src={image}
						alt={product.title}
						className="w-full object-cover aspect-square" />
				</Card>
			)}
		</div>

		<Card className="col-span-3 overflow-hidden">
			<SideBySideMagnifier
				imageSrc={activeImage}
				largeImageSrc={activeImage.replace('640', '1366')}
				imageAlt={product.title}
				fillAvailableSpace={false}
				alwaysInPlace
				className="w-full object-cover aspect-square" />
		</Card>
	</section>
}