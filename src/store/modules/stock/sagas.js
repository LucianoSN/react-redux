import { takeLatest, put, all } from 'redux-saga/effects';

import * as actionStocks from './actions';
import * as actionBooks from '../books/actions';

import { actionStockTypes } from '../../../helpers/enums';

const getBook = (shelve, index, operation) => {
	return { ...shelve[index], stock: operation(shelve[index].stock) };
};

const getStock = (shelve, operation) => {
	return operation(shelve.reduce((total, item) => total + item.stock, 0));
};

const adjust = (payload, operation) => {
	const { shelve, isbn } = payload;

	const index = shelve.findIndex(e => e.isbn === isbn);

	const book = getBook(shelve, index, operation);
	const stock = getStock(shelve, operation);

	return {
		index,
		book,
		stock,
	};
};

function* increment({ payload }) {
	try {
		const { index, book, stock } = adjust(payload, value => value + 1);

		yield put(actionBooks.update(index, book));
		yield put(actionStocks.load(stock));
	} catch (e) {
		yield put(actionStocks.failure());
	}
}

function* decrement({ payload }) {
	try {
		const { index, book, stock } = adjust(payload, value => value - 1);

		yield put(actionBooks.update(index, book));
		yield put(actionStocks.load(stock));
	} catch (e) {
		yield put(actionStocks.failure());
	}
}

export default all([
	takeLatest(actionStockTypes.INCREMENT, increment),
	takeLatest(actionStockTypes.DECREMENT, decrement),
]);
