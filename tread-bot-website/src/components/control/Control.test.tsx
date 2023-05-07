import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Control from './Control';

test('Render control page', () => {
	render(<Control />);
	const linkElement = screen.getByTestId('Control');
	expect(linkElement).toBeDefined()
});