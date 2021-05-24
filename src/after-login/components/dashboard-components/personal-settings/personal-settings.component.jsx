import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import HeaderSettings from '../header-settings/header-settings.component';
import FormInput from '../../../../before-login/components/forms/form-input/form-input.component';
import CountryOption from '../../../../rest-country/rest-country-api';
import UserProfile from '../../../../user-profile/user-profile';
import './personal-settings.styles.scss';

const PersonalSettings = () => {
	const countryRef = useRef();
	const cityRef = useRef();
	const bioRef = useRef();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const { updatePersonalSettings } = useAuth();
	const { userInfo } = UserProfile();
	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault();

		updatePersonalSettings({
			country: countryRef.current.value,
			city: cityRef.current.value,
			bio: bioRef.current.value,
		});
		history.push('/dashboard');
	};

	const handleCityPlaceholderText = () => {
		return !userInfo || userInfo.city === undefined
			? 'city'
			: userInfo.city;
	};

	const handleBioPlaceholderText = () => {
		return !userInfo || userInfo.city === undefined
			? 'Tell us a little about your self'
			: userInfo.bio;
	};

	const handleCountryPlaceholderText = () => {
		return !userInfo || userInfo.city === undefined
			? 'country'
			: userInfo.country;
	};

	return (
		<div className="personal-sett">
			<HeaderSettings />
			<form onSubmit={handleSubmit} className="personal-sett__form">
				<h3 className="personal-sett__title">Personal Settings</h3>

				<div className="personal-sett__input-wrapper">
					<label
						htmlFor="country"
						className="personal-sett__label-country"
					>
						Country
						<select
							name="country"
							id="country"
							ref={countryRef}
							className="personal-sett__selection"
						>
							<option value="">
								{handleCountryPlaceholderText()}
							</option>
							<CountryOption />
						</select>
					</label>

					<FormInput
						type="text"
						name="city"
						ref={cityRef}
						placeholder={handleCityPlaceholderText()}
						label="City"
					/>
				</div>

				<label htmlFor="about" className="personal-sett__label-about">
					<textarea
						type="text"
						className="personal-sett__input-about"
						id="about"
						ref={bioRef}
						placeholder={handleBioPlaceholderText()}
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
