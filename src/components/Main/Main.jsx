import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../container/Home/Home';
import ProjectDetails from '../container/Home/ProjectDetails';
import NotFound from '../container/NotFound/NotFound';

import './main.styles.scss';

const Projects = lazy(() => import('../container/Home/Projects'));
const Contact = lazy(() => import('../container/Contact/Contact'));

const Main = () => {
	return (
		<React.Fragment>
			<main id='main' className='page-wrap'>
				<section>
					<Suspense fallback='Loading....'>
						<Switch>
							<Route path='/contact'>
								<Contact />
							</Route>
							<Route path='/projects/:id' exact component={ProjectDetails} />
							<Route path='/projects'>
								<Projects />
							</Route>
							<Route path='/not-found' component={NotFound} />
							<Route path='/' exact render={() => <Home />} />
							<Redirect to='/not-found' />
						</Switch>
					</Suspense>
				</section>
			</main>
		</React.Fragment>
	);
};

export default Main;
