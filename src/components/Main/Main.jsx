import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../container/Home/Home';
import { ProjectContext } from '../../context/ProjectContext';
// import ProjectDetails from '../container/Home/ProjectDetails';
import NotFound from '../container/NotFound/NotFound';

import './main.styles.scss';

const Projects = lazy(() => import('../container/Home/Projects'));
const Contact = lazy(() => import('../container/Contact/Contact'));
const ProjectDetails = lazy(() => import('../container/Home/ProjectDetails'));

const Main = ({ projects }) => {
	console.log('This Value', projects);
	return (
		<React.Fragment>
			<ProjectContext.Consumer>
				{(value) => (
					<main id='main' className='page-wrap'>
						<section>
							<Suspense fallback='Loading....'>
								<Switch>
									<Route path='/contact'>
										<Contact />
									</Route>
									<Route path='/projects/:id' exact>
										{(props) => <ProjectDetails projects={value} routeProps={props} />}
									</Route>
									<Route path='/projects'>
										<Projects projects={value} />
									</Route>
									<Route path='/not-found' component={NotFound} />
									<Route path='/' exact render={() => <Home />} />
									<Redirect to='/not-found' />
								</Switch>
							</Suspense>
						</section>
					</main>
				)}
			</ProjectContext.Consumer>
		</React.Fragment>
	);
};

export default Main;
