import React from 'react';

import './bar.styles.scss';
interface BarProps {
	score: number;
}

const Bar: React.FC<BarProps> = ({ score }) => {
	return (
		<div className='skill-bar-container'>
			<div className='skill-bar-indicator' style={{ width: `${score}%` }} />
		</div>
	);
};

export default Bar;
