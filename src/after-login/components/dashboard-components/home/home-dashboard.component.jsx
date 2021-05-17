import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import { useAuth } from '../../../../context/auth-context';
import './home-dashboard.styles.scss';

const HomeDashboard = () => {
	const { userInfo } = useAuth();

	const handleCurrentLevel = () => {
		return userInfo.currentLevel === undefined ? (
			<h1>Welcome! Start your eval to see your level</h1>
		) : (
			<h1>Current Level: {userInfo.currentLevel}</h1>
		);
	};

	return (
		<div className="home-dash">
			<div className="home-dash__title">{handleCurrentLevel()}</div>
			<div className="home-dash__cards">
				<div className="home-dash__card-1">
					<svg className="icon home-dash__card-icon">
						<use href={sprite + '#card-icon-success'}></use>
					</svg>

					<h3 className="home-dash__card-title">
						Latest Eval Results
					</h3>
					<div className="home-dash__card-result-text">
						You scored a B1 level on your last evaluation
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
					<button className="home-dash__card-btn--blue">
						Practice
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeDashboard;
