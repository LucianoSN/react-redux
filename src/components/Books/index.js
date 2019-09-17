import React, { useState, useEffect } from 'react';

import Box from '../Box';
import api from '../../services/api';

const Books = () => {
	const [shelve, setShelve] = useState([]);

	useEffect(() => {
		async function loadBooks() {
			const response = await api.get('books');
			setShelve(response.data);
		}

		loadBooks();
	}, []);

	return (
		<section className="section">
			<div className="container">
				<h1 className="title">Trending Now</h1>
				<h2 className="subtitle">
					Looking for Tech eBooks? You'll find everything you need
					right here.
				</h2>
			</div>
			<div className="container" style={{ marginTop: 80 }}>
				{shelve.map(item => (
					<Box
						key={item.isbn}
						title={item.title}
						isbn={item.isbn}
						thumb={item.thumbnailUrl}
						stock={item.stock}
					/>
				))}
			</div>
		</section>
	);
};

export default Books;
