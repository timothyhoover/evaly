import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth-context';
import FormInput from '../forms/form-input/form-input.component';

import './forgot-password.styles.scss';

const ForgotPassword = () => {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState();
	const [message, setMessage] = useState();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Success! Check your inbox for further instructions');
		} catch {
			setError(
				'Oops! Something went wrong. Failed to reset your password'
			);
		}
		setLoading(false);
	};

	return (
		<div className="forgot-pass">
			<div className="forgot-pass__box">
				<h1 className="forgot-pass__heading">Get a new password</h1>

				{error && (
					<div className="forgot-pass__error">
						<span>
							{error}
							<Link className="forgot-pass__return" to="/">
								Return to homepage
							</Link>
						</span>
					</div>
				)}
				{message && (
					<div className="forgot-pass__success">
						<span>{message}</span>
						<Link className="forgot-pass__return" to="/">
							Return to homepage
						</Link>
					</div>
				)}
				<form onSubmit={handleSubmit} className="forgot-pass__form">
					<FormInput
						name="email"
						type="email"
						ref={emailRef}
						label="Email"
						required
					/>

					<div className="forgot-pass__form-footer">
						<button className="forgot-pass__reset btn-primary">
							Reset
						</button>

						<Link to="/log-in">
							<button className="forgot-pass__cancel btn-primary">
								Cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
