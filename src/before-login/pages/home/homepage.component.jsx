import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
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
		<Footer />
	</div>
);

export default HomePage;
