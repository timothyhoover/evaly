import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import FormInput from '../form-input/form-input.component';
import FormFooter from '../form-footer/form-footer.component';
import FormWrapper from '../form-wrapper/form-wrapper.component';
import FormHeader from '../form-header/form-header.component';
import SocialButton from '../social-button/social-button.component';
import './sign-up.styles.scss';

const SignUp = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signup, googleSignIn, setName } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			await setName(nameRef.current.value);

			history.push('/dashboard');
		} catch {
			alert(error);
		}
		setLoading(false);
	};

	const handleGoogleSignIn = async () => {
		(await googleSignIn()) && history.push('/dashboard');
	};

	return (
		<FormWrapper>
			<FormHeader heading={'Sign up'} or={'or'}>
				{/* <SocialButton button={'facebook'} /> */}
				<SocialButton button={'google'} onClick={handleGoogleSignIn} />
			</FormHeader>

			<form onSubmit={handleSubmit} className="sign-up__form">
				<div className="sign-up__input-container">
					<FormInput
						type="text"
						name="displayName"
						ref={nameRef}
						label="Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						ref={emailRef}
						label="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						ref={passwordRef}
						label="Password"
						required
					/>
				</div>

				<div className="sign-up__form-bottom">
					<button
						disabled={loading}
						type="submit"
						className="btn-primary sign-up-box__btn"
					>
						Sign up
					</button>

					<p className="sign-up__terms">
						By joining I declare that I have read and accept the{' '}
						<a href="#">Terms of Service</a> and{' '}
						<a href="#">Privacy Policy</a>
					</p>
				</div>
			</form>

			<FormFooter
				link="/log-in"
				text="Already have an account?"
				button="Log in"
			/>
		</FormWrapper>
	);
};

export default SignUp;
