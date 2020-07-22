import React from 'react';
import { Link } from 'react-router-dom';
import { AboutWrapper, AboutMeRight, AboutMeLeft, AboutMeBtn } from '../../../utils/styles';
const AboutMe = () => {
	return (
		<section style={{ width: '100%', backgroundColor: '#ffffff' }}>
			<AboutWrapper>
				<AboutMeRight />
				<AboutMeLeft>
					<div style={{ marginBottom: 10 }}>
						<h3 style={{ fontSize: 30 }}>A little about me</h3>
					</div>
					<div style={{ marginBottom: 10 }}>
						<p>I describe my self as developer who loves coding and aspires to be an expert in the field.</p>
					</div>
					<Link to={'/about'}>
						<AboutMeBtn>About Me</AboutMeBtn>
					</Link>
				</AboutMeLeft>
			</AboutWrapper>
		</section>
	);
};

export default AboutMe;
