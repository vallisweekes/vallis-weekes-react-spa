import React from 'react';
import { IntroText, HeaderIntro, SubTextWrapper } from '../../../src/utils/styles';
import './head-text.styles.scss';
const HeaderText = () => {
	return (
		<IntroText>
			<HeaderIntro>
				<h1 className='head-styles'>MOTIVATED</h1>
			</HeaderIntro>
			<SubTextWrapper>
				<h2 className='fadeInDown'>FRONT END DEVELOPER</h2>
			</SubTextWrapper>
		</IntroText>
	);
};

export default HeaderText;
