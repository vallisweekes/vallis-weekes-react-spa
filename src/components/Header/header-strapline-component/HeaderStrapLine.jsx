import React, { useState } from 'react';
import './header-strapline.styles.scss';

const straps = ['Excellent communication', 'Flexible', 'Collaborative', 'Creative thinker', 'Innovative'];

const HeaderStrapLine = () => {
	const [current, setCurrent] = useState(0);
	const [length] = useState(straps.length);

	const goPrevious = () => {
		let index = current;
		let iTemLength = length;

		if (index < 1) {
			index = iTemLength - 1;
		} else {
			index--;
		}
		setCurrent(index);
	};

	return (
		<div id='header-strapline' className='header-strapline-container'>
			<div className='header-strapline-wrapper'>
				<div className='header-strapline-carousel'>
					{straps.map((strap, i) => (
						<div key={i} className={i === current ? 'carousel-text slide carousel-active' : 'carousel-text slide carousel-inactive'}>
							<h2>{strap}</h2>
						</div>
					))}
				</div>
				<div className='header-strapline-button' onClick={() => goPrevious()} role='button'>
					<img src='/play.svg' alt='play' />
				</div>
			</div>
		</div>
	);
};

export default HeaderStrapLine;
