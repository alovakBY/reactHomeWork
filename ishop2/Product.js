const Product = React.createClass({

	displayName: `Product`,

	propTypes: {
		product: React.PropTypes.object.isRequired,
		getRedBG: React.PropTypes.func.isRequired,
		activLine: React.PropTypes.string.isRequired,
		getClassTR: React.PropTypes.string.isRequired,
	},

	delClick: function(e) {
		e.stopPropagation()
	},

	lineClick: function(e) {
		this.props.getRedBG(e.target.closest(`tr`))
	},

	render: function() {
		/* const prod = Object.keys(this.props.product).map((cell,i) => {
			if (cell === 'url' && this.props.product[cell] !== `Фото`) {
				return React.DOM.td({key: i, className: `td`}, React.DOM.a({href:`${this.props.product[cell]}`, target: `_blank`}, `фото`))
			} else if (cell === 'btn' && this.props.product[cell] !== `Удалить`) {
				return React.DOM.td({key: i, className: `td`}, React.DOM.button({className: `btn`,type: `button`, onClick: this.delClick}, `Удалить`))
			} else {
				return React.DOM.td({key: i, className: `td`}, this.props.product[cell])
			} 
		}) 

		return React.DOM.tr({className: `${this.props.getClassTR}On`, onClick: this.lineClick}, prod) */
		return React.DOM.tr({className: `${this.props.product.code}`, onClick: this.lineClick}, 
			React.DOM.td({className: `td`}, this.props.product.name),
			React.DOM.td({className: `td`}, this.props.product.prise),
			(this.props.product.url === `Фото`) 
				? React.DOM.td({className: `td`}, this.props.product.url)
				: React.DOM.td({className: `td`}, 
					React.DOM.a({href:`${this.props.product.url}`, target: `_blank`}, `фото`)
				),
			React.DOM.td({className: `td`}, this.props.product.amount),
			React.DOM.td({className: `td`}, this.props.product.code),
			(this.props.product.btn === `Удалить`) 
				? React.DOM.td({className: `td`}, this.props.product.btn)
				: React.DOM.td({className: `td`}, 
					React.DOM.button({className: `btn`,type: `button`, onClick: this.delClick}, `Удалить`) 
				),
		) 
	}

})

