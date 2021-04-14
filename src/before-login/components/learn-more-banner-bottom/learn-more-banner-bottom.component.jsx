import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/high-res/banner-border.png';
import './learn-more-banner-bottom.styles.scss';

const LearnMoreBannerBottom = () => (
	<div>
		<div className="banner-bottom-lm">
			<div className="banner-bottom-lm__item">
				<h2>Rock your English exams!</h2>
				<Link to="/sign-up">
					<button className="btn-tertiary">Get Started</button>
				</Link>
			</div>
		</div>
	</div>
);

export default LearnMoreBannerBottom;
