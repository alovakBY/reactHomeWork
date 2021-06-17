const Product = React.createClass({

	displayName: `Product`,

	propTypes: {
		product: React.PropTypes.object.isRequired,
		getRedBG: React.PropTypes.func.isRequired,
		activLine: React.PropTypes.number.isRequired,
		getDeleteLine: React.PropTypes.func.isRequired,
		deleteLine: React.PropTypes.number.isRequired,
	},

	delClick: function(e) {
		e.stopPropagation()
		this.props.getDeleteLine(this.props.product.code)
	},

	lineClick: function() {
		if (typeof this.props.product.code === 'string') return
		this.props.getRedBG(this.props.product.code)
	},

	aStopProp: function(e) {
		e.stopPropagation()
	},

	render: function() {
		let redCol;
		((parseInt(this.props.activLine) === this.props.product.code)) ? redCol = `rgb(255, 85, 85)` : redCol = `transparent`;
		const prod = Object.keys(this.props.product).map((cell,i) => {
			if (cell === 'url' && this.props.product[cell] !== `Фото`) {
				return React.DOM.td({key: i, className: `td`}, React.DOM.a({href:`${this.props.product[cell]}`, target: `_blank`, onClick: this.aStopProp}, `ссылка`))
			} else if (cell === 'btn' && this.props.product[cell] !== `Удалить`) {
				return React.DOM.td({key: i, className: `td`}, React.DOM.button({className: `btn`,type: `button`, onClick: this.delClick}, `Удалить`))
			} else {
				return React.DOM.td({key: i, className: `td`}, this.props.product[cell])
			} 
		}) 
		return React.DOM.tr({style: {backgroundColor: redCol}, onClick: this.lineClick}, prod)
	}

})


















/* return React.DOM.tr({className: `${this.props.product.code} ${(parseInt(this.props.activLine) === this.props.product.code)}`, onClick: this.lineClick}, 
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
		)  */