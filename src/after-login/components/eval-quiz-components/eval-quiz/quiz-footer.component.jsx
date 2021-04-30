import React from 'react';

import './quiz-footer.styles.scss';

const QuizFooter = props => {
	return (
		<div className="quiz-footer">
			<div className="quiz-footer__question-count">
				<p>
					<span>{props.questionNumber} </span>of
					<span> {props.quizLength}</span>
				</p>
			</div>
			{props.checkButton && (
				<button
					className="btn-primary"
					onClick={() => props.onClickCheck(props.selection)}
				>
					Check
				</button>
			)}

			{props.nextButton && (
				<button className="btn-primary" onClick={props.onClickNext}>
					Next
				</button>
			)}

			{props.finishButton && (
				<button className="btn-primary" onClick={props.onFinish}>
					Finish Quiz
				</button>
			)}
		</div>
	);
};

export default QuizFooter;
