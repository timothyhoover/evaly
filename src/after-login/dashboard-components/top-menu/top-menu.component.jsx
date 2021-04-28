import React, { useState } from 'react';
import useVisible from '../../../hooks/useVisible';
import Dropdown from '../dropdown-menu/dropdown.component';
import sprite from '../../../assets/sprite.svg';
import ProfileImg from '../../../assets/high-res/profile__img-example.png';
import './top-menu.styles.scss';

const TopMenu = () => {
	const { ref, isVisible, setIsVisible } = useVisible(false);

	return (
		<div className="wrapper">
			<div className="top-menu">
				<div className="logo top-menu__logo">evaly</div>
				<a
					href="#"
					className="top-menu__profile"
					onClick={() => setIsVisible(!isVisible)}
				>
					<img
						src={ProfileImg}
						alt=""
						className="top-menu__profile-img"
					/>
					<p className="top-menu__profile-name">Joshua</p>
					<svg className="icon top-menu__arrow-icon">
						<use href={sprite + '#arrow-down'}></use>
					</svg>
				</a>
			</div>
			{isVisible && <Dropdown ref={ref} />}
		</div>
	);
};

export default TopMenu;
