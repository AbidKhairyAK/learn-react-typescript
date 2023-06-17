import useSWR, { SWRResponse } from 'swr'
import { fetcher } from "@/lib";
import { Product } from '@/interfaces';

type OtherResponses = Omit<SWRResponse, 'data'>
type ProductListResponse = { products: Product[] } & OtherResponses
type ProductDetailResponse = { product: Product } & OtherResponses

export function getProductList(): ProductListResponse {
	const { data = [] as Product[], ...result } = useSWR<Product[]>('/products', fetcher)
	return { products: data, ...result }
}

export function getProductDetail(productId: number | string): ProductDetailResponse {
	const { data = {} as Product, ...result } = useSWR<Product>(`/products/${productId}`, fetcher)
	return { product: data, ...result }
}