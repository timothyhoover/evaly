import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import HeaderSettings from '../header-settings/header-settings.component';
import FormInput from '../../../../before-login/components/forms/form-input/form-input.component';
import CountryOption from '../../../../rest-country/rest-country-api';
import {
	createUserProfileDocument,
	firestore,
} from '../../../../firebase.utils';
import './personal-settings.styles.scss';

const PersonalSettings = () => {
	const countryRef = useRef();
	const cityRef = useRef();
	const bioRef = useRef();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const { currentUser, updatePersonalSettings } = useAuth();
	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault();

		updatePersonalSettings({
			country: countryRef.current.value,
			city: cityRef.current.value,
			bio: bioRef.current.value,
		});
	};
	// const userRef = firestore.doc(`users/${currentUser.uid}`);

	// const fetchCountry = async userAuth => {
	// 	if (!userAuth) return;
	// 	const snapShot = await userRef.get();
	// 	return snapShot.data().country;
	// };

	// const fetchCity = async userAuth => {
	// 	if (!userAuth) return;
	// 	const snapShot = await userRef
	// 		.get()
	// 		.then(res => res.json())
	// 		.then(user => {
	// 			return user.city;
	// 		});

	// };

	// const fetchBio = async userAuth => {
	// 	if (!userAuth) return;
	// 	const snapShot = await userRef.get();
	// 	return snapShot.data().bio.then(res => {
	// 		res.json();
	// 	});
	// };

	// console.log(fetchCity(currentUser));

	const fetchData = async userAuth => {
		const userRef = await createUserProfileDocument(userAuth);
		userRef.onSnapshot(snapshot => {
			return snapshot.data();
		});
	};

	console.log(fetchData);

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
							<option value="">Countries</option>
							<CountryOption />
						</select>
					</label>

					<FormInput
						type="text"
						name="city"
						ref={cityRef}
						label="City"
						placeholder={currentUser.city}
					/>
				</div>

				<label htmlFor="about" className="personal-sett__label-about">
					<textarea
						type="text"
						className="personal-sett__input-about"
						id="about"
						ref={bioRef}
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
