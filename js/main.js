class Products {


	render() {
		let htmlCatalog = '';

		CATALOG.forEach(({img, name, gene, age, price}) => {
			
			htmlCatalog += `
				<li class="products-element">
				    <img class="products-element__img" src="${img}" />
					<span class="products-element__name">${name}</span>
					<span class="products-element__about">Gene: <span class="text__dark">${gene}</span> * Age: <span class="text__dark">${age}</span></span>
					<span class="products-element__price">${price.toLocaleString()} VND</span>
				</li>
			`;
		});

		const html = `
			<ul class="products-container">
			    ${htmlCatalog}
			</ul>
		`;

		ROOT_PRODUCTS.innerHTML = html;
		ROOT_FOOT.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();