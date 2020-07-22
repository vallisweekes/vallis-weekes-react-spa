import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer } from '../../../../utils/styles';
import './card.styles.scss';

const Card = ({ image, project: { title, stack, _id } }) => {
	return (
		<CardContainer>
			<div className='card'>
				<img src={image} alt='project' style={{ width: '100%' }} />
				<div className='overlay top-overlay'>
					<div className='card-content'>
						<div className='title'>{title}</div>
						<Link to={`/projects/${_id}`} className='card-view-project'>
							View Project
						</Link>
					</div>
				</div>
			</div>
			<ul>
				<li>{stack}</li>
			</ul>
		</CardContainer>
	);
};

Card.prototype = {
	image: PropTypes.string,
};
export default Card;
