import React, { useState, useEffect } from 'react';

import Box from '../Box';
import api from '../../services/api';

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		async function loadBooks() {
			const response = await api.get('books');
			setBooks(response.data);
		}

		loadBooks();
	}, []);

	return (
		<section className="section">
			<div className="container">
				<h1 className="title">Trending Now</h1>
				<h2 className="subtitle">
					Looking for Fiction & Literature eBooks? You'll find
					everything you need right here.
				</h2>
			</div>
			<div className="container" style={{ marginTop: 40 }}>
				{/*{books.map(book => {*/}
				{/*	<Box*/}
				{/*		title={book.title}*/}
				{/*		shortDescription={book.shortDescription}*/}
				{/*		thumb={book.thumbnailUrl}*/}
				{/*	/>;*/}
				{/*})}*/}
			</div>
		</section>
	);
};

export default Books;
