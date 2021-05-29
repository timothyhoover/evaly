import React from 'react';
import { render } from '@testing-library/react';
import LearnMorePage from './learn-more-page.component';

test('quiz renders correctly', () => {
	// arrange
	const component = render(<LearnMorePage />);

	// assert
	expect(component).toMatchSnapshot();
});
