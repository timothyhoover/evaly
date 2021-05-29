import React from 'react';
import { render } from '@testing-library/react';
import Eval from './eval.component';

describe('Text is rendered correctly', () => {
	test('Successfully rendered title', () => {
		const component = render(<Eval />);
		expect(component).toMatchSnapshot();
	});
});
