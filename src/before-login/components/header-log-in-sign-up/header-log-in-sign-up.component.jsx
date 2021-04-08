import React from 'react';
import { Link } from 'react-router-dom';
import './header-log-in-sign-up.styles.scss';

const HeaderLogInSignUp = () => (
	<div className="header-log-sign">
		<Link to="/">
			<div className="logo" id="header-log-sign__logo">
				evaly
			</div>
		</Link>
	</div>
);

export default HeaderLogInSignUp;
