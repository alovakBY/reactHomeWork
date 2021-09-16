const Ishop = React.createClass({

	displayName: 'Ishop',

	propTypes: {
		name: React.PropTypes.string.isRequired,
		products: React.PropTypes.array.isRequired,
	},

	getInitialState: function() {
		return {
			productsStateIshop: this.props.products,
			activeLine: 0,
		}
	},

	cbGetActiveLine: function(code) {
		this.setState({ activeLine: code })
	},

	cbGetDeleteLine: function(codePr) {
		const conf = confirm('Вы действительно хотите удалить этот товар?')
		if (conf) {const arr = this.state.productsStateIshop.filter( product => {
			return product.code !== codePr
		})
		this.setState({ productsStateIshop:arr}) 
		} 
	},

	render: function() {
		const tr = this.state.productsStateIshop.map( product => {
			return React.createElement(
				Product, 
				{key: product.code,product: product, getActiveLine: this.cbGetActiveLine, activeLine:this.state.activeLine, getDeleteLine: this.cbGetDeleteLine }
			)
		})

		return React.DOM.div({ className: 'Ishop'}, 
			React.DOM.h1(null, this.props.name),
			React.DOM.table({ className: 'products' },
				React.DOM.tbody(null, tr)
			)
		)
	}
 });

