import React from 'react';
import { useHistory } from 'react-router';

import sprite from '../../../../assets/sprite.svg';
import ProgressBar from './progress-bar.component';
import './quiz-header.styles.scss';

const QuizTop = props => {
	const history = useHistory();

	const handleLeaveQuiz = () => {
		const result = window.confirm(
			'If you quit now, all your progress will be lost'
		);
		if (result) {
			return history.push('/dashboard');
		} else {
			return;
		}
	};

	return (
		<div className="top">
			{props.children}
			<div className="top__icon-container">
				<a onClick={handleLeaveQuiz}>
					<svg className="top__cancel-btn">
						<use href={sprite + '#cross'}></use>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default QuizTop;
