import React from 'react';
import './simple-contact.styles.scss';

const Simple = () => {
	return (
		<div className='simple-contact'>
			<div className='simple-contact-inner'>
				<h1>Get in touch with me</h1>
				<h3>
					Email:{' '}
					<span>
						{' '}
						<a href='mailto:vallis.weekes@gmail.com'>vallis.weekes@gmail.com</a>
					</span>
				</h3>
				<h3>
					Mobile:
					<span>
						<a href='tel: 07939595903'> 07939595903</a>
					</span>
				</h3>
			</div>
		</div>
	);
};

export default Simple;
