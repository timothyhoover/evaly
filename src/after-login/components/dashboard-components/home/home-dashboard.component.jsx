import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import TabWrapper from '../tab-wrapper/tab-wrapper.component';
import './home-dashboard.styles.scss';

const HomeDashboard = ({ userInfo }) => {
	const handleCurrentLevel = () => {
		return !userInfo || userInfo.currentLevel === undefined
			? 'Welcome! Start your eval to see your level'
			: `Current Level: ${userInfo.currentLevel}`;
	};

	const handleCurrentLevelCard = () => {
		return !userInfo || userInfo.currentLevel === undefined
			? 'Start a new eval to see your level'
			: `You scored a ${userInfo.currentLevel} in your last eval`;
	};

	return (
		<TabWrapper>
			<div className="home-dash__title-wrapper">
				<h1 className="home-dash__title">{handleCurrentLevel()}</h1>
			</div>
			<div className="home-dash__cards">
				<div className="home-dash__card-1">
					<svg className="icon home-dash__card-icon">
						<use href={sprite + '#card-icon-success'}></use>
					</svg>

					<h3 className="home-dash__card-title">
						Latest Eval Results
					</h3>
					<div className="home-dash__card-result-text">
						{handleCurrentLevelCard()}
					</div>
					<Link to="/eval-quiz">
						<button className="home-dash__card-btn--purple">
							Start New Eval
						</button>
					</Link>
				</div>

				<div className="home-dash__card-2">
					<svg className="icon home-dash__card-icon">
						<use href={sprite + '#card-icon-lightbulb'}></use>
					</svg>

					<h3 className="home-dash__card-title">Areas to practice</h3>
					<div className="home-dash__card-result-text">
						We recommend working on reading skills
					</div>
					{/*<button className="home-dash__card-btn--blue">
							Practice
				</button>*/}
					<div className="home-dash__coming-soon">Coming soon!</div>
				</div>
			</div>
		</TabWrapper>
	);
};

export default HomeDashboard;
