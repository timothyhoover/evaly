import { render, screen } from '@testing-library/react';
import CountryOption from './rest-country-api';

describe('Async component', () => {
	test('renders countries if request succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ numericCode: '', name: 'Spain' }],
		});
		render(<CountryOption />);

		const countries = await screen.findAllByRole('option');
		expect(countries).not.toHaveLength(0);
	});
});
