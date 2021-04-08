import React from 'react';
import HeaderLogInSignIn from '../../components/header-log-in-sign-up/header-log-in-sign-up.component';
import LogIn from '../../components/log-in/log-in.component';
import './log-in-page.styles.scss';

const LogInPage = () => (
	<div>
		<HeaderLogInSignIn />
		<div className="log-in-page">
			<LogIn />
		</div>
	</div>
);

export default LogInPage;
