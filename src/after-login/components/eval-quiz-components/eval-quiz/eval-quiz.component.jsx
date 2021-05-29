import React, { useState } from 'react';
import EvalQuizFinal from '../eval-quiz-final/eval-quiz-final.component';
import sprite from '../../../../assets/sprite.svg';
import QuizHeader from './quiz-header.component';
import ProgressBar from './progress-bar.component';
import QuizFooter from './quiz-footer.component';
import { evalQuestions } from '../eval-questions/eval-questions';
import _ from 'lodash';
import './eval-quiz.styles.scss';

const EvalQuiz = () => {
	const [quizFinal, setQuizFinal] = useState();
	const [nextButton, setNextButton] = useState();
	const [finishButton, setFinishButton] = useState();
	const [checkButton, setCheckButton] = useState(true);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userScore, setUserScore] = useState(0);
	const [selectOption, setSelectOption] = useState();
	const [grade, setGrade] = useState(true);
	const [options, setOptions] = useState(
		_.shuffle(evalQuestions[currentQuestion].options)
	);

	const nextQuestion = currentQuestion + 1;

	const nextButtonHandler = () => {
		setCurrentQuestion(nextQuestion);
		setNextButton(false);
		setCheckButton(true);
		setSelectOption(null);
		setOptions(_.shuffle(evalQuestions[nextQuestion].options));
	};

	const checkButtonHandler = isCorrect => {
		if (isCorrect === true) {
			setNextButton(true);
			setCheckButton(false);
			setUserScore(userScore + 1);
		}

		if (isCorrect === false) {
			setNextButton(true);
			setCheckButton(false);
		}

		if (isCorrect === undefined) {
			alert('Please select an answer to continue with the eval');
		}

		if (nextQuestion > evalQuestions.length - 1) {
			setNextButton(false);
			setCheckButton(false);
			setFinishButton(true);
		}
	};

	const finishButtonHandler = () => {
		setQuizFinal(true);
	};

	const updateOptionClass = optionText => {
		if (optionText === selectOption) {
			if (!checkButton && grade) {
				return 'correct';
			}

			if (!checkButton && !grade) {
				return 'wrong';
			}
		}
		return '';
	};

	const updateCorrectAnswer = answer => {
		if (answer) {
			if (!checkButton && !grade) {
				return 'correct';
			}
		}
	};

	return (
		<React.Fragment>
			{!quizFinal ? (
				<div className="eval-quiz">
					<QuizHeader>
						<ProgressBar
							questionCount={currentQuestion + 1}
							quizLength={evalQuestions.length}
						/>
					</QuizHeader>
					<div className="quiz-box">
						<h1 className="quiz-box__question">
							{evalQuestions[currentQuestion].question}
						</h1>

						{options.map((option, i) => {
							return (
								<label
									htmlFor={option.id}
									key={i}
									className={`quiz-box__option-container ${updateOptionClass(
										option.optionText
									)} ${updateCorrectAnswer(
										option.isCorrect
									)}`}
									style={
										nextButton
											? { pointerEvents: 'none' }
											: { pointerEvents: 'auto' }
									}
									onClick={() => {
										setSelectOption(option.optionText);
										setGrade(option.isCorrect);
									}}
								>
									{checkButton && (
										<input
											name="option"
											type="radio"
											value={option.optionText}
											id={option.id}
											className="quiz-box__option"
										/>
									)}

									<span className="quiz-box__option-text">
										{option.optionText}
									</span>
								</label>
							);
						})}

						<QuizFooter
							onClickCheck={() => checkButtonHandler(grade)}
							onClickNext={nextButtonHandler}
							nextButton={nextButton}
							finishButton={finishButton}
							checkButton={checkButton}
							onFinish={finishButtonHandler}
							quizLength={evalQuestions.length}
							questionNumber={currentQuestion + 1}
						/>
					</div>
				</div>
			) : (
				<EvalQuizFinal
					finalScore={userScore}
					quizLength={evalQuestions.length}
				/>
			)}
		</React.Fragment>
	);
};

export default EvalQuiz;
