import { axiosInstance } from "./axiosInstance"

export async function fetcher (url: string) {
	return axiosInstance.get(url).then(res => res.data)
}