import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../assets/sprite.svg';
import TabWrapper from '../tab-wrapper/tab-wrapper.component';
import './eval.styles.scss';

const Eval = () => {
	return (
		<TabWrapper>
			<div className="eval__title-wrapper">
				<h1 className="eval__title">
					Let’s evaluate your current level
				</h1>
			</div>
			<div className="eval__cards">
				<div className="eval__card">
					<svg className="icon eval__card-icon">
						<use href={sprite + '#book'}></use>
					</svg>
					<div className="eval__card-content-reading">
						<h3 className="eval__card-title">Reading</h3>
						<p className="eval__card-percentage">25%</p>
					</div>
				</div>
				<div className="eval__card">
					<svg className="icon eval__card-icon">
						<use href={sprite + '#pencil'}></use>
					</svg>
					<div className="eval__card-content-writing">
						<h3 className="eval__card-title">Writing</h3>
						<p className="eval__card-percentage">25%</p>
					</div>
				</div>
				<div className="eval__card">
					<svg className="icon eval__card-icon">
						<use href={sprite + '#ear'}></use>
					</svg>
					<div className="eval__card-content-listening">
						<h3 className="eval__card-title">Listening</h3>
						<p className="eval__card-percentage">25%</p>
					</div>
				</div>
				<div className="eval__card">
					<svg className="icon eval__card-icon">
						<use href={sprite + '#speakerphone'}></use>
					</svg>
					<div className="eval__card-content-speaking">
						<h3 className="eval__card-title">Speaking</h3>
						<p className="eval__card-percentage">25%</p>
					</div>
				</div>
				<div className="eval__btn-box">
					<Link to="/eval-quiz">
						<button className="btn-secondary eval__button">
							Start
						</button>
					</Link>
				</div>
			</div>
		</TabWrapper>
	);
};

export default Eval;
