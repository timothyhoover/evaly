import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import styles from './side-menu.styles.scss';
import './side-menu.styles.scss';

const SideMenu = () => {
	const [active, setActive] = useState();

	const onClickHandler = () => {
		setActive(!active);
	};

	return (
		<div className="side-menu">
			<div className="logo side-menu__logo">evaly</div>
			<NavLink
				exact
				to="/dashboard"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#smart-home'}></use>
				</svg>
				<h3 className="side-menu__text">Home</h3>
			</NavLink>

			<NavLink
				to="/dashboard/eval"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
				onClick={onClickHandler}
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#clipboard-list'}></use>
				</svg>
				<h3 className="side-menu__text">Eval</h3>
			</NavLink>

			<NavLink
				to="/dashboard/practice"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon--checkbox">
					<use href={sprite + '#checkbox'}></use>
				</svg>
				<h3 className="side-menu__text">Practice</h3>
			</NavLink>

			<NavLink
				to="/dashboard/results"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#presentation'}></use>
				</svg>
				<h3 className="side-menu__text">Results</h3>
			</NavLink>
		</div>
	);
};

export default SideMenu;
