import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ishop from './Ishop';


const nameText = `Ishop`

const productsArr = [
	{ name: `Наименование`, price: `Цена`, url: `Фото`, amount: `Количество`, code: 'Код товара', btn: `Удалить` },
	{ name: `Холодильник`, price: 5000, url: `https://1teh.by/files/category/123/f50f5582c90992b64dfc45602a346646.png`, amount: 5, code: 111, btn: true, },
	{ name: `Телевизор`, price: 4000, url: `https://online-samsung.ru/sites/default/files/styles/product_big/public/products/DT-UN32N5300AFXZA-gallery2-050118.jpg?itok=554dPCNW`, amount: 4, code: 222, btn: true, },
	{ name: `Телефон`, price: 3000, url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfR940gp-K4mnnVw_128vCg1vKYEet-PsGw&usqp=CAU`, amount: 3, code: 333, btn: true, },
	{ name: `Чайник`, price: 2000, url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49XmDTPm2GDvcoi7XraspiLCpnK9xdTYYyQ&usqp=CAU`, amount: 2, code: 444, btn: true, },
	{ name: `Миксер`, price: 1000, url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNA0uzy9UUTo5KIzjGMRzGTJEMaVUoLwPIQg&usqp=CAU`, amount: 1, code: 555, btn: true, },
]

ReactDOM.render(
	<React.StrictMode>
		<Ishop name = {nameText} products = {productsArr}/>
	</React.StrictMode>,
	document.getElementById('root')
);


