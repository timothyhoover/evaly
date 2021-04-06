import React from 'react';
import { Link } from 'react-router-dom';
import './main-hero.styles.scss';

const MainHero = () => (
	<div className="hero">
		<div className="hero__content">
			<h1>Level up your Cambridge English</h1>
			<span className="bg-evaly_arrow"></span>
			<p>
				Discover your English Level and practice for the exams right
				from your computer. All levels welcome!
			</p>
			<button className="btn-primary hero__get-started">
				Get Started
			</button>
			<button className="btn-primary hero__learn-more">Learn More</button>
		</div>

		<img
			className="hero__img"
			src="img/high-res/home-hero.png"
			alt="main"
		/>
	</div>
);

export default MainHero;
