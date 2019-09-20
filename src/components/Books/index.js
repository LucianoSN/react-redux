import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '../Box';

import * as books from '../../store/modules/books/actions';
import * as stock from '../../store/modules/stock/actions';

const Books = () => {
	const dispatch = useDispatch();

	const loading = useSelector(state => state.books.loading);
	const shelve = useSelector(state => state.books.shelve);

	useEffect(() => {
		dispatch(books.loadRequest());
	}, [dispatch]);

	const incrementHandler = isbn => {
		dispatch(stock.increment(shelve, isbn));
	};

	const decrementHandler = isbn => {
		dispatch(stock.decrement(shelve, isbn));
	};

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
					shelve.map(book => (
						<Box
							key={book.isbn}
							title={book.title}
							isbn={book.isbn}
							thumb={book.thumbnailUrl}
							stock={book.stock}
							increment={incrementHandler}
							decrement={decrementHandler}
						/>
					))}
			</div>
		</section>
	);
};

export default Books;
