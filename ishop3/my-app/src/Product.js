import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

	static propTypes = {
				product: PropTypes.object.isRequired,
				getActiveLine: PropTypes.func,
				activeLine: PropTypes.number.isRequired,
				getDeleteLine: PropTypes.func,
	}

	clickLine = () => {
		if (typeof this.props.product.code === 'string') return
		this.props.getActiveLine(this.props.product.code)
	}

	deleteLine = (e) => {
		e.stopPropagation()
		this.props.getDeleteLine(this.props.product.code)
	}

	render () {
		const prod = Object.keys(this.props.product).map( (cell, i) => {
			if (this.props.product[cell] !== 'Фото' && cell === 'url') {
				return (
					<td key = {i} className = 'td'>
						<a href = {`${this.props.product[cell]}`} target = {`_blank`}>Фото</a>
					</td>
				)
			} else if (this.props.product[cell] !== 'Удалить' && cell === 'btn') {
				return (
					<td key = {i} className = 'td'>
						<button className = {`delBtn`} onClick = { this.deleteLine }>Удалить</button>
					</td>
				)
			} else {
				return (
					<td key = {i} className = 'td'>
						{ this.props.product[cell] }
					</td>
				)
			}
		})

		if (this.props.activeLine === this.props.product.code) {
		return <tr className = 'activeLine' onClick = {this.clickLine}>{prod}</tr>
		} else {
		return <tr onClick = {this.clickLine}>{prod}</tr>
		}
		
		
 }

}


// ({

// 	displayName: 'Product',

// 	propTypes: {
// 		product: React.PropTypes.object.isRequired,
// 		getActiveLine:React.PropTypes.func.isRequired,
// 		activeLine: React.PropTypes.number.isRequired,
// 		getDeleteLine:React.PropTypes.func.isRequired,
// 	},

// 	clickLine: function(e) {
// 		if (typeof this.props.product.code === 'string') return
// 		this.props.getActiveLine(this.props.product.code)
// 	},

// 	deleteLine: function(e) {
// 		e.stopPropagation()
// 		this.props.getDeleteLine(this.props.product.code)
// 	},

// 	render: function() {
// 		const prod = Object.keys(this.props.product).map( (cell, i) => {
// 			if (this.props.product[cell] !== 'Фото' && cell === 'url') {
// 				return React.DOM.td( 
// 					{key:i , className: 'td'}, 
// 					React.DOM.a({ href: `${this.props.product[cell]}`, target: '_blank'}, 'фото') 
// 				)
// 			} else if (this.props.product[cell] !== 'Удалить' && cell === 'btn') {
// 				return React.DOM.td( 
// 					{key:i , className: 'td'}, 
// 					React.DOM.button({ className: 'delBtn' , onClick: this.deleteLine}, 'удалить') 
// 				)
// 			} else {
// 				return React.DOM.td( 
// 					{key:i , className: 'td'}, 
// 					this.props.product[cell]
// 				)
// 			}
// 		})

// 		if (this.props.activeLine === this.props.product.code) {
// 			return React.DOM.tr({className: 'activeLine', onClick: this.clickLine },prod)
// 		} else {
// 			return React.DOM.tr({ onClick: this.clickLine }, prod)
// 		}
		
		
//  }
// })

export default Product
