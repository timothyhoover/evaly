import React, { useState } from 'react';
import HeaderSettings from '../header-settings/header-settings.component';

import sprite from '../../../../assets/sprite.svg';
import './profile-pic.styles.scss';

const ProfilePicSettings = () => {
	const [profileImage, setProfileImage] = useState(null);

	const handleChange = e => {
		if (e.target.files[0]) {
			setProfileImage(e.target.files[0]);
		}
	};

	const handleUpload = () => {};

	console.log('image: ', profileImage);

	return (
		<div className="profile-pic">
			<HeaderSettings />
			<div className="profile-pic__wrapper">
				<h1 className="profile-pic__title">Add a profile picture</h1>
				<div className="profile-pic__box">
					<div
						onChange={handleChange}
						className="profile-pic__circle"
					>
						<svg className="icon profile-pic__icon">
							<use href={sprite + '#upload'}></use>
						</svg>
					</div>

					<input
						type="file"
						name="file"
						id="file"
						class="profile-pic__upload"
						onChange={handleChange}
					/>
					<label for="file">Choose a file</label>
				</div>
			</div>
		</div>
	);
};

export default ProfilePicSettings;
