import produce from 'immer';
import { actionStockTypes } from '../../../helpers/enums';

const INITIAL_STATE = {
	total: null,
};

const stock = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case actionStockTypes.LOAD_STOCK:
				draft.total = action.payload.stock;
				break;
			case actionStockTypes.INCREMENT:
				break;
			case actionStockTypes.DECREMENT:
				break;
			case actionStockTypes.FAILURE_STOCK:
				break;
			default:
		}
	});
};

export default stock;
