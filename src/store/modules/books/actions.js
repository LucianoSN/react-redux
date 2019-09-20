import { actionBookTypes } from '../../../helpers/enums';

export function loadRequest() {
	return {
		type: actionBookTypes.LOAD_REQUEST,
	};
}

export function loadSuccess(shelve, stock) {
	return {
		type: actionBookTypes.LOAD_SUCCESS,
		payload: { shelve },
	};
}

export function loadFailure() {
	return {
		type: actionBookTypes.LOAD_FAILURE,
	};
}
