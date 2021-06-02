import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeDashboard from './home-dashboard.component';

test('is setting correct props', () => {
	// arrange
	const props = {
		userInfo: {
			currentLevel: 'C1',
		},
	};
	render(<HomeDashboard {...props} />, {
		wrapper: MemoryRouter,
	});

	// assert
	expect(screen.getByText(/Current Level/i)).toBeInTheDocument();
});
