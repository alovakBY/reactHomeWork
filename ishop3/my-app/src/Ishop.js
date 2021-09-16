import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

import './Ishop.css';

class Ishop extends React.Component {


	static propTypes = {
		name: PropTypes.string.isRequired,
		products: PropTypes.array.isRequired,
	}

	state = {
		productsStateIshop: this.props.products,
		activeLine: 0,
	}

	cbGetActiveLine =  (code) => {
		this.setState({ activeLine: code })
	}

	cbGetDeleteLine = (codePr) => {
		const conf = window.confirm('Вы действительно хотите удалить этот товар?')
		if (conf) {const arr = this.state.productsStateIshop.filter( product => {
			return product.code !== codePr
		})
		this.setState({ productsStateIshop:arr}) 
		} 
	}

	render() {
		
		const tr = this.state.productsStateIshop.map( product => {
			return (
				<Product key = {product.code}
					product = {product}
					getActiveLine = {this.cbGetActiveLine}
					activeLine = {this.state.activeLine}
					getDeleteLine = {this.cbGetDeleteLine}
			/>)
		})

		return (
			<div className = 'Ishop'>
				<h1>{ this.props.name }</h1>
				<table className = 'products'>
					<tbody>{tr}</tbody>
				</table>
			</div>
		)
	}
}

export default Ishop

