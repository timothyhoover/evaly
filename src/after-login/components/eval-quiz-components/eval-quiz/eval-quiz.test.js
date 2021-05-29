import React from 'react';
import { render } from '@testing-library/react';
import EvalQuiz from './eval-quiz.component';
import QuizHeader from './quiz-header.component';
import ProgressBar from './progress-bar.component';
import QuizFooter from './quiz-footer.component';
import EvalQuizFinal from '../eval-quiz-final/eval-quiz-final.component';

test('quiz renders correctly', () => {
	// arrange
	const { getByRole } = render(<EvalQuiz />);

	getByRole('option');
});
