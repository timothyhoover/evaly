import React from 'react';
import HeaderSettings from '../header-settings/header-settings.component';
import sprite from '../../../../assets/sprite.svg';
import './profile-pic.styles.scss';

const ProfilePicSettings = () => {
	return (
		<div className="profile-pic">
			<HeaderSettings />
			<h1 className="profile-pic__title">Add a profile picture</h1>
			<div className="profile-pic__box">
				<div className="profile-pic__circle">
					<svg className="icon profile-pic__icon">
						<use href={sprite + '#upload'}></use>
					</svg>
				</div>
				<button className="profile-pic__upload-btn btn-secondary-green">
					Upload Picture
				</button>
			</div>
		</div>
	);
};

export default ProfilePicSettings;
