module.exports = () => {
	const { faker } = require('@faker-js/faker')

	const data = {
		users: [],
		products: []
	}

	for (const dataCount of Array(8).keys()) {
		data.products.push({
			id: dataCount + 1,
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			price: faker.commerce.price(),
			images: [
				faker.image.urlLoremFlickr({ category: 'thing', width: 640, height: 640 }),
				faker.image.urlLoremFlickr({ category: 'thing', width: 640, height: 640 }),
				faker.image.urlLoremFlickr({ category: 'thing', width: 640, height: 640 })
			]
		})
	}

	return data
}