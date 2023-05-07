import React from 'react';
import { render, screen } from '@testing-library/react';
import Control from './Control';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import userEvent from '@testing-library/user-event';

let user: UserEvent;

beforeEach(() => {
	user = userEvent.setup()
})

test('Render control page', () => {
	render(<Control />);
	const linkElement = screen.getByTestId('Control');
	expect(linkElement).toBeDefined()
});

test('Try to login', async () => {
	render(<Control />);
	const linkElement = screen.getByTestId('Login');
	expect(linkElement).toBeDefined()
	await user.type(screen.getByTestId('username'), 'ryan')
	await user.type(screen.getByTestId('password'), 'hodge')
	await user.click(screen.getByRole('button', {name: 'Login'}));
});