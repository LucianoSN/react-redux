import { takeLatest, put, all } from 'redux-saga/effects';

import * as actionStocks from './actions';
import * as actionBooks from '../books/actions';

import { actionStockTypes } from '../../../helpers/enums';

function* increment({ payload }) {
	try {
		const { shelve, isbn } = payload;

		// const index = shelve.map(e => e.isbn).indexOf(isbn);
		const index = shelve.findIndex(e => e.isbn === isbn);
		const total = shelve[index].stock + 1;

		const book = { ...shelve[index], stock: total };

		yield put(actionBooks.update(index, book));
	} catch (e) {
		yield put(actionStocks.failureStock());
	}
}

export default all([takeLatest(actionStockTypes.INCREMENT, increment)]);
