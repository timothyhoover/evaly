import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import LearnMoreMain from '../../components/learn-more-main/learn-more-main.component';
import LearnMoreBannerBottom from '../../components/learn-more-banner-bottom/learn-more-banner-bottom.component';
import './learn-more.styles.scss';

const LearnMorePage = () => (
	<div className="learn-more-page">
		<Header />
		<LearnMoreMain />
		<LearnMoreBannerBottom />
		<Footer />
	</div>
);

export default LearnMorePage;
