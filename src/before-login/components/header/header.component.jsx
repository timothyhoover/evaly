import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
	<div className="header">
		<Link className="header__logo-container" to="/">
			<div className="header__logo">evaly</div>
		</Link>
		<div className="header__btn-container">
			<button className="btn-primary header__log-in">Log in</button>
			<button className="btn-primary header__sign-up">Sign up</button>
		</div>
	</div>
);

export default Header;
