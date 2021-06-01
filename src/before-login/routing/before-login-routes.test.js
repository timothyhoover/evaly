import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import BeforeLoginRoutes from './before-login-routes.component';

test('full app rendering/navigating', () => {
	// Arrange
	const history = createMemoryHistory();

	render(
		<Router history={history}>
			<BeforeLoginRoutes />
		</Router>
	);

	// Assert
	// verify page content for expected route
	expect(screen.getByText(/Cambridge English/i)).toBeInTheDocument();

	// Act
	userEvent.click(screen.getByText(/Learn More/i));

	// Assert
	// check that the content changed to the new page
	expect(screen.getByText(/Build Confidence/i)).toBeInTheDocument();
});
