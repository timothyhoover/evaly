import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import img1 from '../../../assets/high-res/learn-more-hero.png';
import img2 from '../../../assets/high-res/learn-more-main-1.png';
import img3 from '../../../assets/high-res/learn-more-main-2.png';
import './learn-more-main.styles.scss';

const LearnMoreMain = () => (
	<div className="main-section-learn">
		<div className="main-section-learn__row-1">
			<div className="main-section-learn__content">
				<h1>Build Confidence</h1>
				<p>
					Discover what your English level and where to improve using
					our evaluation tools.
				</p>
				<Link to="/sign-up">
					<button className="btn-secondary">Get Started</button>
				</Link>
			</div>
			<img src={img1} className="main-section-learn__img-1" />
		</div>

		<div className="main-section-learn__row-2">
			<img src={img2} className="main-section-learn__img-2" />
			<div className="main-section-learn__content">
				<h4>Evaluator</h4>
				<p>
					We evaluate your level based on real world exam situations
					that give an outcome close to what you might see on the
					Cambridge exam
				</p>
			</div>
		</div>

		<div className="main-section-learn__row-3">
			<div className="main-section-learn__content">
				<h4>Practice Exams</h4>
				<p>
					Take as many mock exams as you need to feel at ease on exam
					day. We pride ourselves at making the mock as encouraging
					but accurate as possible.
				</p>
			</div>
			<img src={img3} className="main-section-learn__img-3" />
		</div>
	</div>
);

export default LearnMoreMain;
