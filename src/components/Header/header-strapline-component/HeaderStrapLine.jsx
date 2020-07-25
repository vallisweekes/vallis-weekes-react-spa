import React, { useState } from 'react';
import './header-strapline.styles.scss';

const straps = ['Excellent communication', 'Flexible', 'Collaborative'];

const HeaderStrapLine = () => {
	const [current, setCurrent] = useState(0);
	const [isNext, setIsNext] = useState(true);

	const right = () => {
		console.log('Click Right');
		// let index = current;
		// let length = straps.length;
		// if (index < 1) {
		// 	index = length;
		// }
		// index = index - 1;
		// setCurrent(index);
		// setIsNext(false);
	};
	const left = (e) => {
		console.log('Click Left', e);
		// let index = current;
		// let length = straps.length - 1;
		// if (index === length) {
		// 	index = -1;
		// }
		// index = index + 1;
		// setCurrent(index);
		// setIsNext(true);
	};

	return (
		<div id='header-strapline' className='header-strapline-container' onClick={() => console.log('hi')}>
			{/* <div className='header-strapline-space'></div> */}
			<div className='header-strapline-wrapper'>
				<div className='header-strapline-carousel'>
					{straps.map((strap, i) => (
						<div key={i} className='carousel-text slide' onClick={() => console.log('hi')}>
							<h2>{strap}</h2>
						</div>
					))}
				</div>
				<div className='header-strapline-button' onClick={() => console.log('hi')} role='button'>
					<img src='/play.svg' alt='play' />
				</div>
			</div>
		</div>
	);
};

export default HeaderStrapLine;
