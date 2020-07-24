import React from 'react';
import './soft-skills.styles.scss';

const Softskills = () => {
	return (
		<section className='soft-skills-container'>
			<ul className='soft-skills-inner'>
				<li className='content'>
					<div className='content-1 c-heading'>
						<span>
							<div className='circle-icon color-white'></div>
						</span>
						<h3>Excellent Communication skills</h3>
					</div>
				</li>
				<li className='content c-heading'>
					<div className='content-2 c-heading'>
						<span>
							<div className='circle-icon color-black'></div>
						</span>
						<h3>Great Team Player</h3>
					</div>
				</li>
				<li className='content'>
					<div className='content-3 c-heading'>
						<div style={{ position: 'relative' }} className='content-inner'>
							<span>
								<div className='circle-icon color-white'></div>
								<h3>Fast Learner</h3>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Softskills;
