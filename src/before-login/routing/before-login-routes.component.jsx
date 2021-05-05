import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../../context/auth-context';
import HomePage from '../pages/home/homepage.component';
import LearnMorePage from '../pages/learn-more/learn-more-page.component';
import LogInPage from '../pages/log-in/log-in-page.comopnent';
import SignUpPage from '../pages/sign-up/sign-up-page.component';
import ForgotPasswordPage from '../pages/forgot-password/forgot-password-page.comopnent';

const BeforeLoginRoutes = () => {
	return (
		<React.Fragment>
			<Route exact path="/" component={HomePage} />
			<Route path="/learn-more" component={LearnMorePage} />
			<Route path="/log-in" component={LogInPage} />
			<Route path="/sign-up" component={SignUpPage} />
			<Route path="/forgot-password" component={ForgotPasswordPage} />
		</React.Fragment>
	);
};

export default BeforeLoginRoutes;
