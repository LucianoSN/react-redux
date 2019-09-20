import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
	const stock = useSelector(state => state.books.stock);
	return (
		<div id="header">
			<section className="hero is-dark">
				<div className="hero-body">
					<div className="container">
						<h1 className="title is-4">Book Store</h1>
						<h2 className="subtitle">A simple store using redux</h2>

						<div
							className="title is-1 has-text-warning"
							style={{ marginTop: 30 }}
						>
							Stock: {stock}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
