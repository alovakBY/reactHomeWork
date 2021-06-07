const Ishop = React.createClass({

	displayName: "Ishop",

	propTypes: {
		products: React.PropTypes.array.isRequired,
		name: React.PropTypes.string.isRequired,
	},

	getInitialState: function() {
		return {
			clickLine: '',
			deleteLine: '',
			products: [...this.props.products],
		}
	},

	cbGetRedBG: function(e) {
		this.setState(
			{clickLine: e.className}
		)
	},

	cbGetDeleteLine(e) {
		const deleteProductsArr = this.state.products.filter(el => {
			return el.code !== parseInt(e.className)
		}) 
		this.setState(
			{deleteLine: e.className, products: deleteProductsArr}
		)
	},

	render: function() {
		const products = this.state.products.map((e,i) => {
			if (e.name === this.state.clickLine && e.name !== `Наименование`) {
				return React.createElement(Product, {key: this.state.products[i].code, product: this.state.products[i], getRedBG: this.cbGetRedBG, activLine: this.state.clickLine, getDeleteLine: this.cbGetDeleteLine, deleteLine: this.state.deleteLine})
			}
			return React.createElement(Product, {key: this.state.products[i].code, product: this.state.products[i], getRedBG: this.cbGetRedBG, activLine: this.state.clickLine, getDeleteLine: this.cbGetDeleteLine, deleteLine: this.state.deleteLine})
		})

		return React.DOM.div({className: `Ishop`},
			React.DOM.h1(null, this.props.name),
			React.DOM.table({className: "products"}, 
				React.DOM.tbody(null, products)
			)
		)
	}
})