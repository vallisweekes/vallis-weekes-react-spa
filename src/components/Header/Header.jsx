import React from 'react';
import TopBar from './TopBar/TopBar';
import Intro from './Intro';
import { HeaderWrapper } from '../../utils/styles';
import HeaderStrapLine from './header-strapline-component/HeaderStrapLine';
// import Softskills from './Softskills';

const Header = () => {
	return (
		<section className='h-content'>
			<HeaderWrapper>
				<TopBar />
				<section className='vw-image'>
					<img style={{ width: '100%' }} src='/web-hero-image_cut.png' alt='hero' />
				</section>
				<Intro />
				{/* <Softskills /> */}
				{/* <HeaderStrapLine /> */}
			</HeaderWrapper>
		</section>
	);
};

export default Header;
