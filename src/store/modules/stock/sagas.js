import { takeLatest, put, all } from 'redux-saga/effects';

import * as actionStocks from './actions';
import * as actionBooks from '../books/actions';

import { actionStockTypes } from '../../../helpers/enums';

function* increment({ payload }) {
	try {
		const { shelve, isbn } = payload;

		const index = shelve.findIndex(e => e.isbn === isbn);
		const book = { ...shelve[index], stock: shelve[index].stock + 1 };

		const stock = shelve.reduce((total, item) => total + item.stock, 0) + 1;

		yield put(actionBooks.update(index, book));
		yield put(actionStocks.loadStock(stock));
	} catch (e) {
		yield put(actionStocks.failureStock());
	}
}

function* decrement({ payload }) {
	try {
		const { shelve, isbn } = payload;

		const index = shelve.map(e => e.isbn).indexOf(isbn);
		const book = { ...shelve[index], stock: shelve[index].stock - 1 };

		const stock = shelve.reduce((total, item) => total + item.stock, 0) - 1;

		yield put(actionBooks.update(index, book));
		yield put(actionStocks.loadStock(stock));
	} catch (e) {
		yield put(actionStocks.failureStock());
	}
}

export default all([
	takeLatest(actionStockTypes.INCREMENT, increment),
	takeLatest(actionStockTypes.DECREMENT, decrement),
]);
