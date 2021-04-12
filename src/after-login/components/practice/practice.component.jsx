import React from 'react';
import sprite from '../../../assets/sprite.svg';
import './practice.styles.scss';

const Practice = () => {
	return (
		<div className="practice">
			<h1 className="practice__title">
				Let’s evaluate your current level
			</h1>
			<div className="practice__cards">
				<div className="practice__card">
					<svg className="icon practice__card-icon">
						<use href={sprite + '#book'}></use>
					</svg>
					<div className="practice__card-content-reading">
						<h3 className="practice__card-title">Reading</h3>
					</div>
				</div>
				<div className="practice__card">
					<svg className="icon practice__card-icon">
						<use href={sprite + '#pencil'}></use>
					</svg>
					<div className="practice__card-content-writing">
						<h3 className="practice__card-title">Writing</h3>
					</div>
				</div>
				<div className="practice__card">
					<svg className="icon practice__card-icon">
						<use href={sprite + '#ear'}></use>
					</svg>
					<div className="practice__card-content-listening">
						<h3 className="practice__card-title">Listening</h3>
					</div>
				</div>
				<div className="practice__card">
					<svg className="icon practice__card-icon">
						<use href={sprite + '#speakerphone'}></use>
					</svg>
					<div className="practice__card-content-speaking">
						<h3 className="practice__card-title">Speaking</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Practice;
