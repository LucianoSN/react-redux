import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, isbn, thumb }) => {
	return (
		<div className="box">
			<article className="media">
				<div className="media-left">
					<figure className="image is-64x64">
						<img src={thumb} alt="picture" />
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<div>
							<strong>{title}</strong>
							<p>ISBN: {isbn}</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

Box.propTypes = {
	title: PropTypes.string.isRequired,
	isbn: PropTypes.string.isRequired,
	thumb: PropTypes.string.isRequired,
};

export default Box;
