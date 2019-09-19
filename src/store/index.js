import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
	process.env.NODE_ENV === 'development'
		? console.tron.createSagaMonitor()
		: null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(rootReducer, [sagaMiddleware]);

sagaMiddleware.run(rootSaga);

export { store };
