import React from 'react';

import sprite from '../../../../assets/sprite.svg';
import ProgressBar from './progress-bar.component';
import './quiz-header.styles.scss';

const QuizTop = props => {
	return (
		<div className="top">
			{props.children}
			<div className="top__icon-container">
				<a href="#">
					<svg className="top__cancel-btn">
						<use href={sprite + '#cross'}></use>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default QuizTop;
