import React from 'react';
import img1 from '../../../assets/high-res/home-main-1.png';
import img2 from '../../../assets/high-res/home-main-2.png';
import img3 from '../../../assets/high-res/home-main-3.png';
import img4 from '../../../assets/high-res/home-main-4.png';
import './main-section.styles.scss';

const MainSection = () => (
	<div className="main-section">
		<div className="main-section__row-1">
			<img src={img1} className="main-section__img-1" />
			<div className="main-section__text">
				<h3>
					We give you a solid foundation for what the Cambridge exam
					looks like and where to start your journey.
				</h3>
			</div>
		</div>
		<div className="main-section__row-2">
			<div className="main-section__text">
				<h4>Get Evaluated</h4>
				<p>
					See where to start by using our cutting-edge English
					evaluator
				</p>
			</div>
			<img src={img2} className="main-section__img-2" />
		</div>
		<div className="main-section__row-3">
			<img src={img3} className="main-section__img-3" />
			<div className="main-section__text">
				<h4>Start Practicing</h4>
				<p>
					Whatever your level, you know were to begin your journey to
					rock your English!
				</p>
			</div>
		</div>
		<div className="main-section__row-4">
			<div className="main-section__text">
				<h4>Practice Exams</h4>
				<p>
					Use our life-like mock exams to prepare and rock that test!
				</p>
			</div>
			<img src={img4} className="main-section__img-4" />
		</div>
	</div>
);

export default MainSection;
