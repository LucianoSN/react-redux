import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, isbn, thumb, stock, increment, decrement }) => {
	return (
		<>
			<div className="columns is-mobile">
				<div className="column is-one-fifth">
					<figure className="image is-64x64">
						<img src={thumb} alt="picture" />
					</figure>
				</div>
				<div className="column">
					<strong>{title}</strong>
					<p>ISBN: {isbn}</p>
					<p>Total: {stock}</p>
				</div>
				<div className="column">
					<button
						type="button"
						className="button is-small"
						onClick={() => increment(isbn)}
					>
						+
					</button>
					<button
						type="button"
						className="button is-small"
						onClick={() => decrement(isbn)}
					>
						-
					</button>
				</div>
			</div>
			<hr />
		</>
	);
};

Box.propTypes = {
	title: PropTypes.string.isRequired,
	isbn: PropTypes.string.isRequired,
	thumb: PropTypes.string.isRequired,
	stock: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
};

export default Box;
