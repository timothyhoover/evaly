import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import FormFooter from '../form-footer/form-footer.component';
import FormHeader from '../form-header/form-header.component';
import FormInput from '../form-input/form-input.component';
import FormWrapper from '../form-wrapper/form-wrapper.component';
import SocialButton from '../social-button/social-button.component';
import './log-in.styles.scss';

const LogIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, googleSignIn } = useAuth();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			history.push('/dashboard');
		} catch {
			setLoading(false);
			setError('Failed to log in');
		}
		console.log(error);
	};

	const handleGoogleSignIn = async () => {
		(await googleSignIn()) && history.push('/dashboard');
	};

	return (
		<FormWrapper>
			<FormHeader heading={'Log in'} or={'or'}>
				{/* <SocialButton button={'facebook'} /> */}
				<SocialButton button={'google'} onClick={handleGoogleSignIn} />
			</FormHeader>

			<form onSubmit={handleSubmit} className="log-in__form">
				<div className="log-in__input-container">
					<FormInput
						name="email"
						type="email"
						ref={emailRef}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						ref={passwordRef}
						label="Password"
						required
					/>
				</div>

				<div className="log-in__forgot-pass">
					<Link to="/forgot-password">
						<span>Forgot Password?</span>
					</Link>
				</div>
				<div className="log-in__form-bottom">
					<button
						disabled={loading}
						type="submit"
						className="btn-primary log-in-box__btn"
					>
						Log in
					</button>
				</div>
			</form>

			<FormFooter
				link="/sign-up"
				text={"Don't have an account?"}
				button={'Get Started'}
			/>
		</FormWrapper>
	);
};

export default LogIn;
