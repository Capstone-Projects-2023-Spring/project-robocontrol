import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

beforeEach(() => {
	global.fetch = jest.fn(() =>
		Promise.resolve({
			text: () => Promise.resolve({ text: 'hello' }),
		}),
	) as jest.Mock;
	global.scrollTo = jest.fn()
})

test('Render whole app', () => {
	render(<App />);
	const linkElement = screen.getByText('CONTROL');
	expect(linkElement.textContent).toEqual('CONTROL'); // TODO: Change test?
});

describe('Navigation', () => {
	test('Open control page', () => {
		render(<App />);
		fireEvent.click(screen.getByTestId('control-button'))
		const linkText = screen.getByTestId('Control');
		expect(linkText).toBeDefined()
	});

	test('Open about page', async () => {
		render(<App />);
		fireEvent.click(screen.getByTestId('hamburger'))
		fireEvent.click(screen.getByTestId('banner-home'))
		fireEvent.click(screen.getByTestId('about-button'))
		await waitFor(async () => {
			let linkText = await screen.findByTestId('About')
			expect(linkText).toBeDefined()
		})
	});

	// describe('Offcanvas menu', () => {
	// 	test('Open offcanvas menu', () => {
	// 		render(<App />);
	// 		fireEvent.click(screen.getByTestId('hamburger'))
	// 		const linkText = screen.getByText('HOME');
	// 		expect(linkText).toBeDefined()
	// 	});

	// 	test('Navigate to controls page from offcanvas', () => {
	// 		render(<App />);
	// 		fireEvent.click(screen.getByTestId('hamburger'))
	// 		fireEvent.click( screen.getByTestId('banner-controls'))
	// 		const linkText = screen.getByText('Controls');
	// 		expect(linkText).toBeDefined()
	// 	});

	// 	test('Navigate to about page from offcanvas', () => {
	// 		render(<App />);
	// 		fireEvent.click(screen.getByTestId('hamburger'))
	// 		fireEvent.click(screen.getByTestId('banner-about'))
	// 		const linkText = screen.getByText('HOME');
	// 		expect(linkText).toBeDefined()
	// 	});

	// 	test('Navigate back to home page from offcanvas', () => {
	// 		render(<App />);
	// 		fireEvent.click(screen.getByTestId('hamburger'))
	// 		fireEvent.click(screen.getByTestId('banner-about'))
	// 		fireEvent.click(screen.getByTestId('hamburger'))
	// 		fireEvent.click(screen.getByTestId('banner-home'))
	// 		const linkText = screen.getByText('HOME');
	// 		expect(linkText).toBeDefined()
	// 	});
	// })
})

// describe('Control', () => {
	
// 	test('Open control page', () => {
// 		render(<App />);
// 		fireEvent.click(screen.getByTestId('control-button'))
// 		const linkText = screen.getByText('Controls');
// 		expect(linkText).toBeDefined()
// 	});

// 	test('Login to controls', () => {
// 		render(<App />);
// 		fireEvent.click(screen.getByTestId('control-button'))
// 		const linkText = screen.getByText('Controls');
// 		expect(linkText).toBeDefined()
// 	});
// })

// describe('About', () => {
// 	test('Open offcanvas menu', () => {
// 		render(<App />);
// 		fireEvent.click(screen.getByTestId('hamburger'))
// 		const linkText = screen.getByText('HOME');
// 		expect(linkText).toBeDefined()
// 	});
// })

// describe('Other', () => {
// 	test('Open offcanvas menu', () => {
// 		render(<App />);
// 		fireEvent.click(screen.getByTestId('hamburger'))
// 		const linkText = screen.getByText('HOME');
// 		expect(linkText).toBeDefined()
// 	});
// })
