import { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import PublicSite from './layouts/PublicSite'
import ProductList from './pages/product-list/ProductList'
import ProductDetail from './pages/product-detail/ProductDetail'
import CartList from './pages/cart-list/CartList'

const router = createBrowserRouter([
	{ path: '', element: <PublicSite />, children: [
		{ path: '/', element: <ProductList /> },
		{ path: '/products/:productId', element: <ProductDetail /> },
		{ path: '/carts', element: <CartList /> },
	]}
])

function App(): ReactElement {
	return <Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
}

export default App
