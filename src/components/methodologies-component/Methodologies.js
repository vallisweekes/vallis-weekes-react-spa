import React from 'react';
import './methodologies.styles.scss';

const Methodologies = () => {
	return (
		<section className='methodologies-container'>
			<div className='methodologies-container-inner'>
				<div className='methodologies-image'>
					<h2>AGILE</h2>
				</div>
				<div className='methodologies-image'>
					<img src='/slack_logo_new.png' alt='slack' />
				</div>
				<div className='methodologies-image'>
					<img src='/jira_logo.png' alt='Jira' />
				</div>
			</div>
		</section>
	);
};

Methodologies.propTypes = {};

export default Methodologies;
