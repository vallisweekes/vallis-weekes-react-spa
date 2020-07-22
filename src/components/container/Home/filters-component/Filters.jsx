import React from 'react';
import './filters.scss';

const Filters = ({ onFilter, active }) => {
	const category = ['ALL', 'React-JS', 'jquery', 'Html/Css'];
	return (
		<ul className='filters-wrapper'>
			{category.map((cat, i) => (
				<li className={active === cat.toLowerCase() ? 'active-filter' : ''} key={i} onClick={() => onFilter(cat)}>
					{cat}
				</li>
			))}
		</ul>
	);
};

Filters.propTypes = {};

export default Filters;
