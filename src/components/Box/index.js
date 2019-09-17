import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, shortDescription, thumb }) => {
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
						<p>
							<strong>{title}</strong>
							{shortDescription}
						</p>
					</div>
				</div>
			</article>
		</div>
	);
};

Box.propTypes = {
	title: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	thumb: PropTypes.string.isRequired,
};

export default Box;
