import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import mockFetch from './tools/mockFetch';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

let user: UserEvent;

// Crazy voodoo magic
beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	}
)});

beforeEach(() => {
	user = userEvent.setup()
	window.fetch = jest.fn().mockImplementation(mockFetch);
	global.scrollTo = jest.fn()
})

test('Render whole app', () => {
	render(<App />);
	const linkElement = screen.getByRole('button', {name: 'CONTROL'});
	expect(linkElement.textContent).toEqual('CONTROL'); // TODO: Change test?
});

describe('Navigation', () => {
	test('Open control page', async () => {
		render(<App />);
		await user.click(screen.getByRole('button', {name: 'CONTROL'}))
		expect(window.location.pathname).toEqual('/control')
	});

	test('Open about page', async () => {
		render(<App />);
		await user.click(screen.getByTestId('hamburger'))
		await user.click(screen.getByRole('link', {name: 'HOME'}))
		await user.click(screen.getByRole('button', {name: 'ABOUT'}))
		expect(window.location.pathname).toEqual('/about')
	});

	describe('Offcanvas menu', () => {
		test('Navigate to controls page from offcanvas', async () => {
			render(<App />);
			await user.click(screen.getByTestId('hamburger'))
			await user.click(screen.getByRole('link', {name: 'CONTROL'}))
			expect(window.location.pathname).toEqual('/control')
		});

		test('Navigate to about page from offcanvas', async () => {
			render(<App />);
			await user.click(screen.getByTestId('hamburger'))
			await user.click(screen.getByRole('link', {name: 'ABOUT'}))
			expect(window.location.pathname).toEqual('/about')
		});

		test('Navigate back to home page from offcanvas', async () => {
			render(<App />);
			await user.click(screen.getByTestId('hamburger'))
			await user.click(screen.getByRole('link', {name: 'CONTROL'}))
			await user.click(screen.getByTestId('hamburger'))
			await user.click(screen.getByRole('link', {name: 'HOME'}))
			expect(window.location.pathname).toEqual('/home')
		});
	})
})
