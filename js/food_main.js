class food_catalog {


	render() {
		let htmlCatalog = '';

		FOOD_CATALOG.forEach(({img, name, product, size, price}) => {
			
			htmlCatalog += `
				<li class="products-element">
				    <img class="products-element__img" src="${img}" />
					<span class="products-element__name">${name}</span>
					<span class="products-element__about_food">Product: <span class="text__dark">${product}</span> * Size: <span class="text__dark">${size}kg</span></span>
					<span class="products-element__price">${price.toLocaleString()} VND</span>
					<button class="products-element__btn"><i class="fa-solid fa-gift"></i> * Free Toy & Free Shaker</button>
				</li>
			`;
		});

		const html = `
			<ul class="products-container">
			    ${htmlCatalog}
			</ul>
		`;

		ROOT_FOOD.innerHTML = html;

	}
}

const food_catalogPage = new food_catalog();
food_catalogPage.render();