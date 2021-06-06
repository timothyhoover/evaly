import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import Results from '../results/results.component';
import './side-menu.styles.scss';

const SideMenu = () => {
	const [active, setActive] = useState();

	const onClickHandler = () => {
		setActive(!active);
	};

	return (
		<div className="side-menu">
			<div className="side-menu__logo-wrapper">
				<Link to="/dashboard">
					<div className="logo side-menu__logo"></div>
				</Link>
			</div>

			<NavLink
				exact
				to="/dashboard"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#smart-home'}></use>
				</svg>
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
			</NavLink>

			<NavLink
				to="/dashboard/practice"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon--checkbox">
					<use href={sprite + '#checkbox'}></use>
				</svg>
			</NavLink>

			<NavLink
				to="/dashboard/results"
				className="side-menu__tab"
				activeClassName="side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#presentation'}></use>
				</svg>
			</NavLink>
		</div>
	);
};

export default SideMenu;
