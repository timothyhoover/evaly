import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import './side-menu.styles.scss';

const SideMenu = () => {
	return (
		<div className="side-menu">
			<div className="logo side-menu__logo">evaly</div>
			<Link
				to="/dashboard/home"
				className="side-menu__tab side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#smart-home'}></use>
				</svg>
				<h3 className="side-menu__text">Home</h3>
			</Link>

			<Link
				to="/dashboard/eval"
				className="side-menu__tab side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#clipboard-list'}></use>
				</svg>
				<h3 className="side-menu__text">Eval</h3>
			</Link>

			<Link
				to="/dashboard/practice"
				className="side-menu__tab side-menu__tab--active"
			>
				<svg className="icon side-menu__icon--checkbox">
					<use href={sprite + '#checkbox'}></use>
				</svg>
				<h3 className="side-menu__text">Practice</h3>
			</Link>

			<Link
				to="/dashboard/results"
				className="side-menu__tab side-menu__tab--active"
			>
				<svg className="icon side-menu__icon">
					<use href={sprite + '#presentation'}></use>
				</svg>
				<h3 className="side-menu__text">Results</h3>
			</Link>
		</div>
	);
};

export default SideMenu;
