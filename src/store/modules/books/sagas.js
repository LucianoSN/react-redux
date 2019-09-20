import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { actionBookTypes } from '../../../helpers/enums';

import { loadStock } from '../stock/actions';

function* loadBooks() {
	try {
		const response = yield call(api.get, 'books');
		const shelve = response.data;

		const stock = shelve.reduce((total, item) => total + item.stock, 0);

		yield put(loadSuccess(shelve));
		yield put(loadStock(stock));
	} catch (e) {
		yield put(loadFailure());
	}
}

export default all([takeLatest(actionBookTypes.LOAD_REQUEST, loadBooks)]);
