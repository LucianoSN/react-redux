import { takeLatest, put, all } from 'redux-saga/effects';

import * as actionStocks from './actions';
import * as actionBooks from '../books/actions';

import { actionStockTypes } from '../../../helpers/enums';

const getIndex = (shelve, isbn) => {
	return shelve.findIndex(e => e.isbn === isbn);
};

const getBook = (shelve, index, operation) => {
	return { ...shelve[index], stock: operation(shelve[index].stock) };
};

const getStock = (shelve, operation) => {
	return operation(shelve.reduce((total, item) => total + item.stock, 0));
};

const adjust = (payload, operation) => {
	const { shelve, isbn } = payload;
	const index = getIndex(shelve, isbn);

	return {
		index,
		book: getBook(shelve, index, operation),
		stock: getStock(shelve, operation),
	};
};

function* increment({ payload }) {
	try {
		const { index, book, stock } = adjust(payload, value => value + 1);

		yield put(actionBooks.update(index, book));
		yield put(actionStocks.loadStock(stock));
	} catch (e) {
		yield put(actionStocks.failureStock());
	}
}

function* decrement({ payload }) {
	try {
		const { index, book, stock } = adjust(payload, value => value - 1);

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
