import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './before-login/pages/home/homepage.component';
import LearnMorePage from './before-login/pages/learn-more/learn-more-page.component';
import LogInPage from './before-login/pages/log-in/log-in-page.comopnent';
import SignUpPage from './before-login/pages/sign-up/sign-up-page.component';
import './App.scss';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/learn-more" component={LearnMorePage} />
				<Route path="/log-in" component={LogInPage} />
				<Route path="/sign-up" component={SignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
