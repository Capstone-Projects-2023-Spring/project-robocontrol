import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Crazy voodoo magic
beforeAll(() => Object.defineProperty(window, 'matchMedia', {
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
}));

test('Render whole app', () => {
	render(<App />);
	const linkElement = screen.getByText('CONTROL');
	expect(linkElement.textContent).toEqual('CONTROL');
});

test('Open offcanvas menu', () => {
	render(<App />);
	fireEvent.click( screen.getByTestId('hamburger') )
	const linkText = screen.getByText('HOME');
	expect(linkText).toBeDefined()
})
