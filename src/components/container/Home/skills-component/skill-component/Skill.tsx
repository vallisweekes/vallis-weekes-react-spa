import React from 'react';
import Bar from '../bar-component/Bar';
import SkillTitle from '../skill-title-component/SkillTitle';
import Score from '../score-component/Score';

import './skill.styles.scss';

interface SkillProps {
	title: string;
	score: number;
}

const Skill: React.FC<SkillProps> = ({ title, score }) => {
	return (
		<div className='skill-wrap'>
			<SkillTitle title={title} />
			<Bar score={score} />
			<Score score={score} />
		</div>
	);
};

export default Skill;
