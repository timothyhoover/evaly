import React from 'react';
import sprite from '../../assets/sprite.svg';
import './log-in.styles.scss';

const LogIn = () => (
	<div className="log-in">
		<div className="log-in__box">
			<h1 className="log-in__header">Log in</h1>
			<div className="log-in__social">
				<button className="log-in__facebook-btn">
					<svg className="icon log-in__icon">
						<use href={sprite + '#facebook'}></use>
					</svg>
					Facebook
				</button>
				<button className="log-in__google-btn">
					<svg className="icon log-in__icon">
						<use href={sprite + '#google'}></use>
					</svg>
					Google
				</button>
			</div>
			<p className="log-in__or">or</p>
			<form className="log-in__form" action="#">
				<label className="log-in__label" htmlFor="email">
					Email
					<input
						type="email"
						name="email"
						id="email"
						className="log-in__input"
					/>
				</label>
				<label
					className="log-in__label"
					log-in__label
					htmlFor="password"
				>
					Password
					<input
						type="password"
						name="password"
						id="password"
						className="log-in__input"
					/>
				</label>
				<a className="log-in__forgot-pass" href="#">
					Forgot Password?
				</a>
				<div className="log-in__form-footer">
					<button className="btn-primary log-in-box__btn">
						Log in
					</button>
				</div>
			</form>
			<div className="log-in__box-footer">
				<p>Don't have an account?</p>
				<button className="btn-secondary">Get Started</button>
			</div>
		</div>
	</div>
);

export default LogIn;
