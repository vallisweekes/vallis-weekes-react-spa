import React from 'react';

import './content-offset.styles.scss';
import ErdDiagram from '../erd-component/ErdDiagram';

const ContentOffset = () => {
	const [erdDisplay, setErdDisplay] = React.useState(false);

	const handleErdDisplay = () => {
		console.log('Hi');
		setErdDisplay(true);
	};
	const handleErdDisplayClose = () => {
		console.log('Hi');
		setErdDisplay(false);
	};
	return (
		<section className='content-offset-container'>
			<div className='content-offset-wrapper'>
				<div className='content-offset-item'>
					<div className='content-offset-image'>
						<img src='/erd.jpg' alt='erd' />
					</div>
					<ErdDiagram erdDisplay={erdDisplay} handleErdDisplayClose={handleErdDisplayClose} />
					<div className='content-offset-content'>
						<div className='offset-content-title'>
							<h2>Express Food Logical Database</h2>
							<h3>ERD Diagram</h3>
							<div className='offset-content-btn' role='button' onClick={handleErdDisplay}>
								VIEW
							</div>
						</div>
					</div>
				</div>
				<div className='content-offset-item'>
					<div className='content-offset-content'>
						<div className='offset-content-title'>
							<h2>Written Documentations</h2>
							<h3>TDD Testing</h3>
							<div className='offset-content-btn' role='button'>
								<a href='https://vw-technical-documentation-v1.netlify.app/' target='blank' rel='noopener norefferer'>
									View
								</a>
							</div>
						</div>
					</div>

					<div className='content-offset-image'>
						<img src='/tdd-documentation.jpg' alt='erd' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentOffset;
