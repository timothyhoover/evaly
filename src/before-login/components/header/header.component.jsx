import React from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
	const { pathname } = useLocation();

	const handleHeader = () => {
		if (pathname === '/' || pathname === '/learn-more') {
			return (
				<div className="header">
					<Link to="/">
						<div className="header__logo">evaly</div>
					</Link>
					<div className="header__btn-container">
						<Link to="/log-in">
							<button className="btn-primary header__log-in">
								Log in
							</button>
						</Link>

						<Link to="/sign-up">
							<button className="btn-primary header__sign-up">
								Sign up
							</button>
						</Link>
					</div>
				</div>
			);
		}

		if (
			pathname === '/sign-up' ||
			pathname === '/log-in' ||
			pathname === '/forgot-password'
		) {
			return (
				<div className="header-log-sign">
					<Link to="/">
						<div className="header-log-sign__logo">evaly</div>
					</Link>
				</div>
			);
		}
	};

	return <React.Fragment>{handleHeader()}</React.Fragment>;
};

export default Header;
