const Ishop = React.createClass({

	displayName: 'Ishop',
 
	render: function() {

		const products = this.props.products.map( (product) => {
			const prod = Object.keys(product).map( (cell) => {
				if (product[cell] !== 'Фото' && cell === 'url') {
					return React.DOM.td( {className: 'td'}, React.DOM.a({ href: `${product[cell]}`}, 'фото') )
				} else {
					return React.DOM.td( { className: 'td'}, product[cell])
				}
			})
			return React.DOM.tr({ className: 'product' , key: product.code }, prod)
		} )
 
	  return React.DOM.div ( { className: 'Ishop' },
			React.DOM.h1( null, this.props.name ),
			React.DOM.table ( {className: 'products' }, 
				React.DOM.tbody( null , products)
				)
	  )},
 
 });

