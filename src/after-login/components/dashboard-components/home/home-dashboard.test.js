import React from 'react';
import { render } from '@testing-library/react';
import * as UserContext from '../../../../context/user-context';
import HomeDashboard from './home-dashboard.component';

test('is rendering correctly', () => {
	UserContext.useUser = jest.fn();
	UserContext.useUser.mockResolvedValueOnce({
		userInfo: {
			currentLevel: 'C1',
		},
	});

	const component = render(<HomeDashboard />);
	expect(component).toMatchSnapshot();
});
