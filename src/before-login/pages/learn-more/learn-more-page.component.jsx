import React from 'react';
import Footer from '../../components/footer/footer.component';
import LearnMoreMain from '../../components/learn-more-main/learn-more-main.component';
import LearnMoreBannerBottom from '../../components/learn-more-banner-bottom/learn-more-banner-bottom.component';
import './learn-more.styles.scss';

const LearnMorePage = () => (
	<div className="learn-more-page">
		<LearnMoreMain />
		<LearnMoreBannerBottom />
		<Footer />
	</div>
);

export default LearnMorePage;
