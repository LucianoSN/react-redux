import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, isbn, thumb }) => {
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
};

export default Box;
