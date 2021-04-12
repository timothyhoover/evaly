import React from 'react';
import { Link } from 'react-router-dom';
import './forgot-password.styles.scss';

const ForgotPassword = () => (
	<div className="forgot-pass">
		<div className="forgot-pass__box">
			<h1 className="forgot-pass__heading">Get a new password</h1>

			<form action="#" className="forgot-pass__form">
				<label htmlFor="email" className="forgot-pass__label">
					Email
					<input
						type="email"
						id="email"
						className="forgot-pass__input"
					/>
				</label>
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

export default ForgotPassword;
