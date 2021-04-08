import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import './sign-up.styles.scss';

const SignUp = () => (
	<div className="sign-up">
		<div className="sign-up__box">
			<h1 className="sign-up__header">Sign up</h1>
			<div className="sign-up__social">
				<button className="sign-up__facebook-btn">
					<svg className="icon sign-up__icon">
						<use href={sprite + '#facebook'}></use>
					</svg>
					Facebook
				</button>
				<button className="sign-up__google-btn">
					<svg className="icon sign-up__icon">
						<use href={sprite + '#google'}></use>
					</svg>
					Google
				</button>
			</div>
			<p className="sign-up__or">or</p>
			<form className="sign-up__form" action="#">
				<label className="sign-up__label" htmlFor="email">
					Email
					<input
						type="email"
						name="email"
						id="email"
						className="sign-up__input"
						required
					/>
				</label>

				<label className="sign-up__label" htmlFor="name">
					Name
					<input
						type="text"
						name="name"
						id="name"
						className="sign-up__input"
						required
					/>
				</label>

				<label className="sign-up__label" htmlFor="password">
					Create a password
					<input
						type="password"
						name="password"
						id="password"
						className="sign-up__input"
						required
					/>
				</label>

				<div className="sign-up__form-footer">
					<button className="btn-primary sign-up-box__btn">
						Sign up
					</button>

					<p className="sign-up__terms">
						By joining I declare that I have read and accept the{' '}
						<a href="#">Terms of Service</a> and{' '}
						<a href="#">Privacy Policy</a>
					</p>
				</div>
			</form>
			<div className="sign-up__box-footer">
				<p>Already have an account?</p>
				<Link to="/log-in">
					<button className="btn-secondary">Log in</button>
				</Link>
			</div>
		</div>
	</div>
);

export default SignUp;
