import React from 'react';
import LearnMoreMain from '../../components/learn-more-main/learn-more-main.component';
import LearnMoreBannerBottom from '../../components/learn-more-banner-bottom/learn-more-banner-bottom.component';
import './learn-more.styles.scss';

const LearnMorePage = () => (
	<div className="learn-more-page">
		<LearnMoreMain />
		<LearnMoreBannerBottom />
	</div>
);

export default LearnMorePage;
