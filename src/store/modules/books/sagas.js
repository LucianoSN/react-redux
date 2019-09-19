import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { actionBookTypes } from '../../../helpers/enums';

export function* loadBooks() {
	try {
		const response = yield call(api.get, 'books');
		yield put(loadSuccess(response.data));
	} catch (e) {
		yield put(loadFailure());
	}
}

export default all([takeLatest(actionBookTypes.LOAD_REQUEST, loadBooks)]);
