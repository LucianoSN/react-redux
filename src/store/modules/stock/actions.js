import { actionStockTypes } from '../../../helpers/enums';

export function loadStock(stock) {
	return {
		type: actionStockTypes.LOAD_STOCK,
		payload: { stock },
	};
}

export function insertStock() {
	return {
		type: actionStockTypes.INSERT_FROM_STOCK,
	};
}

export function removeStock() {
	return {
		type: actionStockTypes.REMOVE_FROM_STOCK,
	};
}

export function failureStock() {
	return {
		type: actionStockTypes.FAILURE_STOCK,
	};
}
