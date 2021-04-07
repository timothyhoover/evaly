import React from 'react';
import MainHero from '../../components/main-hero/main-hero.component';
import BannerTop from '../../components/banner-top/banner-top.component';
import './homepage.styles.scss';

const HomePage = () => (
	<div className="homepage">
		<MainHero />
		<BannerTop />
	</div>
);

export default HomePage;
