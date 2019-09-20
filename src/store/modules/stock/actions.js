import { actionStockTypes } from '../../../helpers/enums';

export function load(stock) {
	return {
		type: actionStockTypes.LOAD,
		payload: { stock },
	};
}

export function increment(shelve, isbn) {
	return {
		type: actionStockTypes.INCREMENT,
		payload: { shelve, isbn },
	};
}

export function decrement(shelve, isbn) {
	return {
		type: actionStockTypes.DECREMENT,
		payload: { shelve, isbn },
	};
}

export function failure() {
	return {
		type: actionStockTypes.FAILURE,
	};
}
