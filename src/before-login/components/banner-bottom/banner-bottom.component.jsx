import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/high-res/banner-border.png';
import './banner-bottom.styles.scss';

const BannerBottom = () => (
	<div>
		<div className="banner-bottom">
			<div className="banner-bottom__item">
				<h2>What are you waiting for?</h2>
				<Link to="/sign-up">
					<button className="btn-tertiary">Get Started</button>
				</Link>
			</div>
		</div>
	</div>
);

export default BannerBottom;
