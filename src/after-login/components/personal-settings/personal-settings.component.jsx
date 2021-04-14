import React from 'react';
import HeaderSettings from '../header-settings/header-settings.component';
import './personal-settings.styles.scss';

const PersonalSettings = () => {
	return (
		<div className="personal-sett">
			<HeaderSettings />
			<h3 className="personal-sett__title">Personal Settings</h3>
			<form action="X" className="personal-sett__form">
				<label
					htmlFor="country"
					className="personal-sett__label-country"
				>
					<select
						name="country"
						id="country"
						className="personal-sett__selection"
					>
						<option value="">Country</option>
						<option value="united states">United States</option>
						<option value="spain">Spain</option>
						<option value="united kingdom">United Kingdom</option>
					</select>
				</label>
				<label htmlFor="city" className="personal-sett__label-city">
					<select
						name="city"
						id="city"
						className="personal-sett__selection"
					>
						<option value="">City</option>
						<option value="dallas">Dallas</option>
						<option value="madrid">Madrid</option>
						<option value="london">London</option>
					</select>
				</label>
				<label htmlFor="about" className="personal-sett__label-about">
					<textarea
						type="text"
						className="personal-sett__input-about"
						id="about"
						placeholder="Tell us about yourself"
						rows="15"
						cols="75"
					/>
				</label>
				<div className="personal-sett__btn">
					<button className="btn-secondary-green">
						Save changes
					</button>
				</div>
			</form>
			<div className="spacer-big"></div>
		</div>
	);
};

export default PersonalSettings;
