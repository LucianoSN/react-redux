import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Header from './components/Header';
import Books from './components/Books';

import { store } from './store';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Books />
		</Provider>
	);
}

export default App;
