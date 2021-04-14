import React from 'react';
import sprite from '../../../assets/sprite.svg';
import './eval-quiz.styles.scss';

const EvalQuiz = () => {
	return (
		<div className="eval-quiz">
			<div className="eval-quiz__top">
				<div className="eval-quiz__progress-container">
					<div className="eval-quiz__progress-bar">
						<div className="eval-quiz__progress-bar-fill"></div>
					</div>
				</div>

				<div className="eval-quiz__icon-container">
					<a href="#">
						<svg className="eval-quiz__cancel-btn">
							<use href={sprite + '#cross'}></use>
						</svg>
					</a>
				</div>
			</div>
			<div className="eval-quiz__container">
				<h1 className="eval-quiz__question">
					I’m 18 and my brother is 20, so he’s ….. me.
				</h1>

				<label
					htmlFor="label-1"
					className="eval-quiz__option-container correct"
					id="option-1"
				>
					<input
						name="option"
						type="radio"
						id="label-1"
						className="eval-quiz__option"
					/>
					<svg className="eval-quiz__check">
						<use href={sprite + '#check'}></use>
					</svg>
					<span className="eval-quiz__option-text">as old as</span>
				</label>
				<label
					htmlFor="label-2"
					className="eval-quiz__option-container wrong"
					id="option-2"
				>
					<input
						name="option"
						type="radio"
						id="label-2"
						className="eval-quiz__option"
					/>
					<svg className="eval-quiz__cross">
						<use href={sprite + '#cross'}></use>
					</svg>
					<span className="eval-quiz__option-text">older than</span>
				</label>
				<label
					htmlFor="label-3"
					className="eval-quiz__option-container"
					id="option-3"
				>
					<input
						name="option"
						type="radio"
						id="label-3"
						className="eval-quiz__option"
					/>
					<span className="eval-quiz__option-text">oldest</span>
				</label>

				<div className="eval-quiz__footer">
					<div className="eval-quiz__question-count">
						<p>
							<span>1 </span>of<span> 35</span>
						</p>
					</div>
					<button className="eval-quiz__check-btn btn-primary">
						Check
					</button>
				</div>
			</div>
		</div>
	);
};

export default EvalQuiz;
