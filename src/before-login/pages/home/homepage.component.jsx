import React from 'react';
import MainHero from '../../components/main-hero/main-hero.component';
import BannerTop from '../../components/banner-top/banner-top.component';
import MainSection from '../../components/main-section/main-section.component';
import BannerBottom from '../../components/banner-bottom/banner-bottom.component';
import './homepage.styles.scss';

const HomePage = () => (
	<div className="homepage">
		<MainHero />
		<BannerTop />
		<MainSection />
		<BannerBottom />
	</div>
);

export default HomePage;
