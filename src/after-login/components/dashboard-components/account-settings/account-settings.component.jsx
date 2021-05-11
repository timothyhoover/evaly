import React, { useRef, useState } from 'react';
import { useAuth } from '../../../../context/auth-context';
import { useHistory } from 'react-router-dom';
import HeaderSettings from '../header-settings/header-settings.component';
import FormInput from '../../../../before-login/components/forms/form-input/form-input.component';
import './account-settings.styles.scss';

const AccountSettings = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const {
		currentUser,
		updateEmail,
		updatePassword,
		updateName,
		updateAccountSettings,
	} = useAuth();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState();
	const history = useHistory();

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		setError('');

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return alert('passwords do not match');
		}

		const promises = [];

		if (nameRef.current.value !== currentUser.displayName) {
			promises.push(updateName(nameRef.current.value));
			updateAccountSettings(currentUser);
		}

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
			updateAccountSettings(currentUser);
		}

		if (passwordRef.current.value !== currentUser.password) {
			promises.push(updatePassword(passwordRef.current.value));
			updateAccountSettings(currentUser);
		}

		Promise.all(promises)
			.then(() => {
				alert('success');
				history.push('/dashboard');
			})
			.catch(error => {
				alert(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleChange = e => {
		setInput(e.target.value);
	};

	return (
		<div className="account-sett">
			<HeaderSettings />
			<div className="account-sett__body">
				<div className="account-sett__body-title">
					<h3>Account Settings</h3>
				</div>
				<form onSubmit={handleSubmit} className="account-sett__form">
					<div className="account-sett__form-container-1">
						<FormInput
							type="text"
							name="displayName"
							ref={nameRef}
							label="Name"
							placeholder={currentUser.displayName}
						/>

						<FormInput
							name="email"
							type="email"
							ref={emailRef}
							label="Email"
							placeholder={currentUser.email}
						/>

						<FormInput
							type="password"
							name="password"
							ref={passwordRef}
							label="Password"
						/>
					</div>

					<div className="account-sett__form-container-2">
						<FormInput
							type="password"
							name="password"
							ref={passwordConfirmRef}
							label="Confirm Password"
						/>
					</div>
					<div className="account-sett__form-footer">
						<div className="account-sett__form-footer-container-1">
							<button
								type="submit"
								className="btn-secondary-green account-sett__save-btn"
							>
								Save Changes
							</button>
						</div>
						<div className="account-sett__form-footer-container-2">
							<a href="" className="account-sett__delete">
								Delete Account
							</a>
						</div>
					</div>
				</form>
			</div>
			<div className="spacer"></div>
		</div>
	);
};

export default AccountSettings;
