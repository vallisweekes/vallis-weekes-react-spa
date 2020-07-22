import React from 'react';
import './skill-title.styles.scss';
interface SkillTitleProps {
	title: string;
}

const SkillTitle: React.FC<SkillTitleProps> = ({ title }) => {
	return (
		<div className='skill-title'>
			<span>{title}</span>
		</div>
	);
};

export default SkillTitle;
