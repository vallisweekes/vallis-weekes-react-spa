import React, { StrictMode } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Layout = () => {
	return (
		<StrictMode>
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		</StrictMode>
	);
};

export default Layout;
