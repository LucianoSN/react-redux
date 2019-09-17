import React from 'react';

import './config/ReactotronConfig';

import Header from './components/Header';
import Books from './components/Books';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Books />
		</div>
	);
}

export default App;
