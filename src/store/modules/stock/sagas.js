import { takeLatest, call, put, all } from 'redux-saga/effects';

import { insertStock, failureStock } from './actions';
import { actionStockTypes } from '../../../helpers/enums';

function* insert({ payload }) {
	try {
		const { shelve, isbn } = payload;
	} catch (e) {
		yield put(failureStock());
	}
}

export default all([takeLatest(actionStockTypes.INSERT_FROM_STOCK, insert)]);
