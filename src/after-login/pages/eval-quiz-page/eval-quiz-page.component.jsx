import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EvalQuiz from '../../eval-quiz-components/eval-quiz/eval-quiz.component';
import EvalQuizFinal from '../../eval-quiz-components/eval-quiz-final/eval-quiz-final.component';
import './eval-quiz-page.styles.scss';

const EvalQuizPage = () => {
	return (
		<div className="eval-quiz-page">
			<div className="eval-quiz-page__container">
				<Switch>
					<Route path="/eval-quiz/start" component={EvalQuiz} />
					<Route path="/eval-quiz/final" component={EvalQuizFinal} />
				</Switch>
			</div>
		</div>
	);
};

export default EvalQuizPage;
