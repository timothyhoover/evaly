import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import HeroImg from '../../assets/high-res/home-hero.png';
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
			<Link to="/sign-up">
				<button className="btn-secondary hero__get-started">
					Get Started
				</button>
			</Link>
			<Link to="/learn-more">
				<button className="btn-secondary hero__learn-more">
					Learn More
				</button>
			</Link>
		</div>

		<img className="hero__img" src={HeroImg} alt="main" />
	</div>
);

export default MainHero;
