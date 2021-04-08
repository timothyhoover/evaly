import React from 'react';
import { Link } from 'react-router-dom';
import './header-log-in-sign-in.styles.scss';

const HeaderLogInSignIn = () => (
	<div className="header-lg-si">
		<Link to="/">
			<div className="logo" id="header-lg-si__logo">
				evaly
			</div>
		</Link>
	</div>
);

export default HeaderLogInSignIn;
