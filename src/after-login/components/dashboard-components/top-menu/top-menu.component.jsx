import React from 'react';
import { useAuth } from '../../../../context/auth-context';
import useVisible from '../../../../hooks/useVisible';
import Dropdown from '../dropdown-menu/dropdown.component';
import sprite from '../../../../assets/sprite.svg';
import './top-menu.styles.scss';

const TopMenu = () => {
	const { ref, isVisible, setIsVisible } = useVisible(false);
	const { currentUser } = useAuth();

	const handleDropdown = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="wrapper">
			<div className="top-menu">
				<div className="logo top-menu__logo">evaly</div>
				<a
					href="#"
					className="top-menu__profile"
					onClick={handleDropdown}
				>
					<img
						src={currentUser.photoURL}
						alt="Profile Picture"
						className="top-menu__profile-img"
					/>
					<p className="top-menu__profile-name">
						{currentUser.displayName}
					</p>
					<svg className="icon top-menu__arrow-icon">
						<use href={sprite + '#arrow-down'}></use>
					</svg>
				</a>
			</div>
			{isVisible && <Dropdown handleDropdown={handleDropdown} />}
		</div>
	);
};

export default TopMenu;
