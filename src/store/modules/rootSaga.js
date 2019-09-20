import { all } from 'redux-saga/effects';

import books from './books/sagas';
import stock from './stock/sagas';

export default function* rootSaga() {
	return yield all([books, stock]);
}
