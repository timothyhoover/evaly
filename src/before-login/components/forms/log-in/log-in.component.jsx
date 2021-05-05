import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import FormFooter from '../form-footer/form-footer.component';
import FormHeader from '../form-header/form-header.component';
import FormInput from '../form-input/form-input.component';
import FormWrapper from '../form-wrapper/form-wrapper.component';
import SocialButton from '../social-button/social-button.component';
import { auth, signInWithGoogle } from '../../../../firebase.utils';
import './log-in.styles.scss';

const LogIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, currentUser } = useAuth();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/dashboard');
		} catch {
			setError('Failed to log in');
		}
		setLoading(false);
	};

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit} className="log-in__form">
				<FormHeader heading={'Log in'} or={'or'}>
					<SocialButton button={'facebook'} />
					<SocialButton
						button={'google'}
						onClick={signInWithGoogle}
					/>
				</FormHeader>

				<div className="log-in__form">
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

					<div className="log-in__forgot-pass">
						<Link to="/forgot-password">
							<span>Forgot Password?</span>
						</Link>
					</div>
					<div className="log-in__form-bottom">
						<button
							type="submit"
							className="btn-primary log-in-box__btn"
						>
							Log in
						</button>
					</div>
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
