import { takeLatest, call, put, all } from 'redux-saga/effects';

import { loadStock, insertStock, removeStock, failureStock } from './actions';
import { actionStockTypes } from '../../../helpers/enums';

export function* insert() {
	try {
		console.tron.log('INSERT STOCK');
	} catch (e) {
		yield put(failureStock());
	}
}

export default all([takeLatest(actionStockTypes.INSERT_FROM_STOCK, insert)]);
