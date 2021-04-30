import React from 'react';
import { Link } from 'react-router-dom';
import './eval-quiz-final.styles.scss';

const EvalQuizFinal = props => {
	return (
		<div className="eval-final">
			<div className="eval-final__header">
				<h1 className="eval-final__title">Congratulations!</h1>
				<div className="eval-final__icon">🎉</div>
			</div>
			<div className="eval-final__box">
				<div className="eval-final__box-score">
					<h3>
						You scored <span>{props.finalScore}</span> out of{' '}
						<span>{props.quizLength}</span> correct
					</h3>
				</div>
				<div className="eval-final__level">
					<p>
						Your current English level is <span>B1</span>
					</p>
				</div>
				<Link to="/dashboard/home">
					<button className="btn-primary">Return Home</button>
				</Link>
			</div>
		</div>
	);
};

export default EvalQuizFinal;
