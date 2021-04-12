import React from 'react';
import HeaderLogInSignIn from '../../components/header-log-in-sign-up/header-log-in-sign-up.component';
import ForgotPassword from '../../components/forgot-password/forgot-password.component';
import './forgot-password-page.styles.scss';

const ForgotPasswordPage = () => (
	<div>
		<HeaderLogInSignIn />
		<div className="forgot-password-page">
			<ForgotPassword />
		</div>
	</div>
);

export default ForgotPasswordPage;
