import { act, render, screen } from '@testing-library/react';
import Countries from './rest-country-api';

describe('Async component', () => {
	test('renders countries if request succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ numericCode: '', name: 'Spain' }],
		});
		render(<Countries />);

		const countries = await screen.findAllByRole('option');
		expect(countries).not.toHaveLength(0);
	});

	test('displays correct country', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ numericCode: '', name: 'Spain' }],
		});
		render(<Countries />);
		const countries = await screen.findByText('Spain');

		expect(countries).toBeInTheDocument();
	});
});
