import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import './dropdown.styles.scss';

const Dropdown = props => {
	useEffect(() => {
		console.log('useEffect');
		if (!props.userClickDropdown) {
			document.getElementById('dropdownId').style.display = 'none';
		} else {
			document.getElementById('dropdownId').style.display = 'flex';
		}
	});

	return (
		<div className="dropdown" id="dropdownId">
			<nav role="account navigation" className="dropdown__container">
				<Link
					to="/dashboard/account-settings"
					className="dropdown__item"
				>
					<a href="#" className="dropdown__item">
						Account Settings
					</a>
				</Link>

				<Link
					to="/dashboard/profile-picture"
					className="dropdown__item"
				>
					<a href="#">Profile Picture</a>
				</Link>

				<Link
					to="/dashboard/personal-settings"
					className="dropdown__item"
				>
					<a href="#">Personal Settings</a>
				</Link>
				<a
					href="#"
					className="dropdown__log-out"
					onClick={e => props.onClick(e.target.value)}
				>
					<svg className="icon dropdown__icon">
						<use href={sprite + '#logout'}></use>
					</svg>
					<p className="dropdown__item--log-out">Log out</p>
				</a>
			</nav>
		</div>
	);
};

export default Dropdown;
