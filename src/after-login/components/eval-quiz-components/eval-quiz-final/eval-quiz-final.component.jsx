import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import { createUserProfileDocument } from '../../../../firebase.utils';
import './eval-quiz-final.styles.scss';

const EvalQuizFinal = props => {
	const { currentUser } = useAuth();

	const englishLevelSetter = () => {
		if (props.finalScore === props.quizLength) {
			return 'C1';
		}

		if (props.finalScore === 4) {
			return 'B2';
		}

		if (props.finalScore === 3) {
			return 'B1';
		}

		if (props.finalScore === 2) {
			return 'A2';
		}

		if (props.finalScore < 2) {
			return 'A1';
		}
	};

	const saveUserEnglishLevel = () => {
		createUserProfileDocument(currentUser, {
			currentLevel: englishLevelSetter(),
		});
	};

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
						Your current English level is{' '}
						<span>{englishLevelSetter()}</span>
					</p>
				</div>
				<Link to="/dashboard">
					<button
						className="btn-primary"
						onClick={saveUserEnglishLevel}
					>
						Return Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default EvalQuizFinal;
