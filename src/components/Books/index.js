import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '../Box';

import { loadRequest } from '../../store/modules/books/actions';

const Books = () => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.books.loading);
	const books = useSelector(state => state.books.shelve);

	useEffect(() => {
		dispatch(loadRequest());
	}, [dispatch]);

	const incrementHandler = isbn => {
		console.tron.log(isbn);
	};

	const decrementHanlder = () => {};

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
				{!loading &&
					books.map(item => (
						<Box
							key={item.isbn}
							title={item.title}
							isbn={item.isbn}
							thumb={item.thumbnailUrl}
							stock={item.stock}
							increment={incrementHandler}
							decrement={decrementHanlder}
						/>
					))}
			</div>
		</section>
	);
};

export default Books;
