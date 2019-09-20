import produce from 'immer';
import { actionBookTypes } from '../../../helpers/enums';

const INITIAL_STATE = {
	loading: false,
	shelve: [],
};

const books = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case actionBookTypes.LOAD_REQUEST: {
				draft.loading = true;
				break;
			}
			case actionBookTypes.LOAD_SUCCESS: {
				draft.loading = false;
				draft.shelve = action.payload.shelve;
				break;
			}
			case actionBookTypes.LOAD_FAILURE: {
				draft.loading = false;
				break;
			}
			default:
		}
	});
};

export default books;
