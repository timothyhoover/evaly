import React from 'react';
import sprite from '../../../assets/sprite.svg';
import ProfileImg from '../../../assets/high-res/profile__img-example.png';
import './top-menu.styles.scss';

const TopMenu = () => {
	return (
		<div className="wrapper">
			<div className="top-menu">
				<div className="logo top-menu__logo">evaly</div>
				<div className="top-menu__profile">
					<img
						src={ProfileImg}
						alt=""
						className="top-menu__profile-img"
					/>
					<p className="top-menu__profile-name">Joshua</p>
					<svg className="icon top-menu__arrow-icon">
						<use href={sprite + '#arrow-down'}></use>
					</svg>
				</div>
			</div>
			<div className="dropdown">
				<div className="dropdown__container">
					<p className="dropdown__item">Account Settings</p>
					<p className="dropdown__item">Profile Picture</p>
					<p className="dropdown__item">Personal Settings</p>
					<div className="dropdown__log-out">
						<svg className="icon dropdown__icon">
							<use href={sprite + '#logout'}></use>
						</svg>
						<p className="dropdown__item--log-out">Log out</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopMenu;
