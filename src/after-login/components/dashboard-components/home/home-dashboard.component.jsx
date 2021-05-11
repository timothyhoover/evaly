import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import './home-dashboard.styles.scss';

const HomeDashboard = () => {
	return (
		<div className="home-dash">
			<div className="home-dash__title">
				<h1>Current Level: B2</h1>
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
