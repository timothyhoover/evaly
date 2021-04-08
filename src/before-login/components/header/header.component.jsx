import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
	<div className="header">
		<Link className="header__logo-container" to="/">
			<div className="header__logo">evaly</div>
		</Link>
		<div className="header__btn-container">
			<Link to="/log-in">
				<button className="btn-primary header__log-in">Log in</button>
			</Link>

			<Link to="sign-up">
				<button className="btn-primary header__sign-up">Sign up</button>
			</Link>
		</div>
	</div>
);

export default Header;
