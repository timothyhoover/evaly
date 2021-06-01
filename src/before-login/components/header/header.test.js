import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';
import Header from './header.component';

test('header rendering buttons on homepage', () => {
	render(<Header />, { wrapper: MemoryRouter });

	// verify page content for expected route
	expect(screen.getByText(/Log in/i)).toBeInTheDocument();
});

test('header not rendering buttons on log in page', () => {
	const history = createMemoryHistory();
	const route = '/log-in';
	history.push(route);
	render(
		<Router history={history}>
			<Header />
		</Router>
	);

	const logInButton = screen.queryByText('Log in');
	expect(logInButton).toBeNull();
});

test('header not rendering buttons on sign up page', () => {
	const history = createMemoryHistory();
	const route = '/sign-up';
	history.push(route);
	render(
		<Router history={history}>
			<Header />
		</Router>
	);

	const logInButton = screen.queryByText('Sign up');
	expect(logInButton).toBeNull();
});
