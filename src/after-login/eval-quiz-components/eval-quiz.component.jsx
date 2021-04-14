import React from 'react';
import './eval-quiz.styles.scss';

const EvalQuiz = () => {
	return (
		<div className="eval-quiz">
			<div className="eval-quiz__progress-bar"></div>
			<a href="#" className="eval-quiz__cancel-btn"></a>
			<div className="eval-quiz__container">
				<div className="eval-quiz__question">
					I’m 18 and my brother is 20, so he’s ….. me.
				</div>
				<div className="eval-quiz__option-container" id="option-1">
					<div className="eval-quiz__option-prefix"></div>
					<div className="eval-quiz__option">as old as</div>
				</div>
				<div className="eval-quiz__option-container" id="option-2">
					<div className="eval-quiz__option-prefix"></div>
					<div className="eval-quiz__option">older than</div>
				</div>
				<div className="eval-quiz__option-container" id="option-3">
					<div className="eval-quiz__option-prefix"></div>
					<div className="eval-quiz__option">the oldest of</div>
				</div>
				<div className="eval-quiz__footer">
					<div className="eval-quiz__question-count">1 of 35</div>
					<button className="eval-quiz__check-btn btn-primary">
						Check
					</button>
				</div>
			</div>
		</div>
	);
};

export default EvalQuiz;
