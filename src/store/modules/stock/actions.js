import { actionStockTypes } from '../../../helpers/enums';

export function loadStock(stock) {
	return {
		type: actionStockTypes.LOAD_STOCK,
		payload: { stock },
	};
}

export function incrementStock(shelve, isbn) {
	return {
		type: actionStockTypes.INCREMENT,
		payload: { shelve, isbn },
	};
}

export function decrementStock() {
	return {
		type: actionStockTypes.DECREMENT,
	};
}

export function failureStock() {
	return {
		type: actionStockTypes.FAILURE_STOCK,
	};
}
