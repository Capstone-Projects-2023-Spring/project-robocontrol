import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('Render button grid', () => {
	render(<Login loginSuccessful={() => {}}/>);
	const linkElement = screen.getByTestId('Login');
	expect(linkElement).toBeDefined()
});