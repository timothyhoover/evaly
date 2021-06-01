import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Eval from './eval.component';

describe('Text is rendered correctly', () => {
	test('Successfully rendered title', () => {
		const component = render(
			<BrowserRouter>
				<Eval />
			</BrowserRouter>
		);
		expect(component).toMatchSnapshot();
	});
});
