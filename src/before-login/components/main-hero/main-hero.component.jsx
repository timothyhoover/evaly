import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import './main-hero.styles.scss';

const MainHero = () => (
	<div className="hero">
		<div className="hero__content">
			<h1>
				Level up your
				<svg className="icon hero__icon">
					<use href={sprite + '#evaly-arrow'}></use>
				</svg>
				<br />
				Cambridge English
			</h1>

			<p>
				Discover your English Level and practice for the exams right
				from your computer. All levels welcome!
			</p>
			<button className="btn-secondary hero__get-started">
				Get Started
			</button>
			<button className="btn-secondary hero__learn-more">
				Learn More
			</button>
		</div>

		<img
			className="hero__img"
			src="img/high-res/home-hero.png"
			alt="main"
		/>
	</div>
);

export default MainHero;
