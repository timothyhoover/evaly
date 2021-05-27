import React from 'react';
import { screen, render } from '@testing-library/react';
import FormInput from './form-input.component';

describe('Is rendering input correctly', () => {
	test('is setting correct props', () => {
		// arrange
		const props = {
			label: 'Email',
			placeholer: 'john.smith@gmail.com',
			type: 'text',
			name: 'email',
		};
		const InputComponent = render(<FormInput {...props} />);

		// act
		// ....

		// assert
		expect(InputComponent).toMatchSnapshot();
	});
});
