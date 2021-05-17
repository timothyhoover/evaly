import React from 'react';
import './progress-bar.styles.scss';

const ProgressBar = props => {
	const width = (props.questionCount / props.quizLength) * 100;

	return (
		<div className="progress">
			<div className="progress__bar">
				<div
					className="progress__bar-fill"
					style={{
						width: `${width}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
