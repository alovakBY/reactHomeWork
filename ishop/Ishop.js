const Ishop = React.createClass({

	displayName: "Ishop",

	propTypes: {
		products: React.PropTypes.array.isRequired,
		name: React.PropTypes.string.isRequired,
	},

	render: function() {

		const products = this.props.products.map((product,i) => {
			const prod = Object.keys(product).map((cell) => {
				if (cell === 'url' && product[cell] !== `Фото`) {
					return React.DOM.td({key: product[cell], className: `td`}, React.DOM.a({href:`${product[cell]}`, target: `_blank`}, `фото`))
				} else if (cell === 'btn' && product[cell] !== `Удалить`) {
					return React.DOM.td({key: product[cell], className: `td`}, React.DOM.button({className: `btn`,type: `button`}, `Удалить`))
				} else {
					return React.DOM.td({key: product[cell], className: `td`}, product[cell])
				} 
			})
			return React.DOM.tr({key: i+1, className: "product"},prod)
		})

		return React.DOM.div({className: `Ishop`},
			React.DOM.h1(null, this.props.name),
			React.DOM.table({className: "products"}, 
				React.DOM.tbody(null, products)
			)
		)
	}
})