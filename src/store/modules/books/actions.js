import { actionBookTypes } from '../../../helpers/enums';

export function loadRequest() {
	return {
		type: actionBookTypes.LOAD_REQUEST,
	};
}

export function loadSuccess(shelve) {
	return {
		type: actionBookTypes.LOAD_SUCCESS,
		payload: { shelve },
	};
}

export function update(index, book) {
	return {
		type: actionBookTypes.UPDATE,
		payload: { index, book },
	};
}

export function failure() {
	return {
		type: actionBookTypes.FAILURE,
	};
}
