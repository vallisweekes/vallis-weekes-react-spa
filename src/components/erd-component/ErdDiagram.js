import React from 'react';
import './erd-styles.scss';

const ErdDiagram = ({ erdDisplay, handleErdDisplayClose }) => {
	console.log(erdDisplay);
	return (
		<div className={erdDisplay ? 'light-box-container show' : 'light-box-container'} onClick={handleErdDisplayClose}>
			<div className='light-box-image '>
				<img src='/ERD_diagram.jpeg' alt='erd diagram' />
			</div>
		</div>
	);
};

export default ErdDiagram;
