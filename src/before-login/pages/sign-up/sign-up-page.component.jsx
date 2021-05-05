import React from 'react';
import HeaderLogInSignUp from '../../components/header-log-in-sign-up/header-log-in-sign-up.component';
import SignUp from '../../components/forms/sign-up/sign-up.component';
import './sign-up-page.styles.scss';

const SignUpPage = () => (
	<div>
		<HeaderLogInSignUp />
		<div className="sign-up-page">
			<SignUp />
		</div>
	</div>
);

export default SignUpPage;
