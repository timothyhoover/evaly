import React from 'react';
import HeaderSettings from '../header-settings/header-settings.component';
import './account-settings.styles.scss';

const AccountSettings = () => {
	return (
		<div className="account-sett">
			<HeaderSettings />
			<div className="account-sett__body">
				<h3 className="account-sett__body-title">Account Settings</h3>
				<form action="#" className="account-sett__form">
					<label htmlFor="name" className="account-sett__form-name">
						Name
						<input
							type="text"
							id="name"
							className="account-sett__form-input"
						/>
					</label>
					<label htmlFor="email" className="account-sett__form-email">
						Email
						<input
							type="email"
							id="email"
							className="account-sett__form-input"
						/>
					</label>
					<div className="account-sett__form-password">
						<label
							htmlFor="password"
							className="account-sett__form-password-label"
						>
							Password
							<input
								type="text"
								id="password"
								className="account-sett__form-input--password"
							/>
						</label>
						<label
							htmlFor="password"
							className="account-sett__form-password-label"
						>
							Confirm Password
							<input
								type="text"
								id="password"
								className="account-sett__form-input--password"
							/>
						</label>
					</div>
					<div className="account-sett__form-footer">
						<button className="btn-secondary-green account-sett__save-btn">
							Save Changes
						</button>
						<a href="" className="account-sett__delete">
							Delete Account
						</a>
					</div>
				</form>
			</div>
			<div className="spacer"></div>
		</div>
	);
};

export default AccountSettings;
