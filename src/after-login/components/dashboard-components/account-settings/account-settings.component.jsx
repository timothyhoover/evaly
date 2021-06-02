import React, { useRef, useState } from 'react';
import { useAuth } from '../../../../context/auth-context';
import { useHistory } from 'react-router-dom';
import HeaderSettings from '../header-settings/header-settings.component';
import FormInput from '../../../../before-login/components/forms/form-input/form-input.component';
import Modal from '../modal/modal.component';

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
		deleteProfile,
	} = useAuth();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState();
	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return alert('passwords do not match');
		}

		const promises = [];
		setLoading(true);
		setError('');

		if (nameRef.current.value !== currentUser.displayName) {
			promises.push(updateName(nameRef.current.value));
		}

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}
		Promise.all(promises)
			.then(() => {
				history.push('/dashboard');
			})
			.catch(error => {
				setError(error);
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleDeleteAccount = async () => {
		setError('');
		try {
			await deleteProfile();
			setModal(!modal);
			history.push('/log-in');
		} catch (error) {
			setError(error);
			console.log(error);
		}
	};

	const showModalHandler = () => {
		setModal(!modal);
	};

	return (
		<React.Fragment>
			<div className="account-sett">
				<HeaderSettings />
				<div className="account-sett__body">
					<div className="account-sett__body-title">
						<h3>Account Settings</h3>
					</div>
					<form
						onSubmit={handleSubmit}
						className="account-sett__form"
					>
						<div className="account-sett__form-container-1">
							<FormInput
								type="text"
								name="displayName"
								ref={nameRef}
								label="Name"
								placeholder={currentUser.displayName}
								required
							/>

							<FormInput
								name="email"
								type="email"
								ref={emailRef}
								label="Email"
								placeholder={currentUser.email}
								required
							/>

							<FormInput
								type="password"
								name="password"
								ref={passwordRef}
								placeholder="Leave blank if you wish to keep password"
								label="Password"
							/>
						</div>

						<div className="account-sett__form-container-2">
							<FormInput
								type="password"
								name="password"
								ref={passwordConfirmRef}
								placeholder="Leave blank if you wish to keep password"
								label="Confirm Password"
							/>
						</div>
						<div className="account-sett__form-footer">
							<div className="account-sett__form-footer-container-1">
								<button
									disabled={loading}
									type="submit"
									className="btn-secondary-green account-sett__save-btn"
								>
									Save Changes
								</button>
							</div>
							<div className="account-sett__form-footer-container-2">
								<span
									className="account-sett__delete"
									onClick={showModalHandler}
								>
									Delete Account
								</span>
							</div>
						</div>
					</form>
				</div>
				<div className="spacer"></div>
			</div>
			{modal && (
				<Modal
					onClickHandler={showModalHandler}
					handleLogout={handleDeleteAccount}
					title={'Are you sure you want to delete your account?'}
				/>
			)}
		</React.Fragment>
	);
};

export default AccountSettings;
