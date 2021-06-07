const Ishop = React.createClass({

	displayName: "Ishop",

	propTypes: {
		products: React.PropTypes.array.isRequired,
		name: React.PropTypes.string.isRequired,
	},

	getInitialState: function() {
		return {
			clickLine: '',
			activ: 'activ',
		}
	},

	cbgetRedBG: function(target) {
		console.log(target.className)
		this.setState(
			{clickLine: target.firstChild.textContent}
		)
		
	},

	render: function() {

		const products = this.props.products.map((e,i) => {
			if (e.name === this.state.clickLine && e.name !== `Наименование`) {
				return React.createElement(Product, {key: this.props.products[i].name, product: this.props.products[i], getRedBG: this.cbgetRedBG, activLine: this.state.clickLine,
					getClassTR: this.state.activ})
			}
			return React.createElement(Product, {key: this.props.products[i].name, product: this.props.products[i], getRedBG: this.cbgetRedBG, activLine: this.state.clickLine,
				getClassTR: ``})
		})

		return React.DOM.div({className: `Ishop`},
			React.DOM.h1(null, this.props.name),
			React.DOM.table({className: "products"}, 
				React.DOM.tbody(null, products)
			)
		)
	}
})