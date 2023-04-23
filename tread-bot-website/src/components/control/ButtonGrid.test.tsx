import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGrid from './ButtonGrid';

const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`
const commands_ws = new WebSocket(COMMANDS_WS_URL)

test('Render button grid', () => {
	render(<ButtonGrid keyPress={{ char: '', keyDown: false }} commands_ws={commands_ws} setAutonomous={() => {}} />);
	const linkElement = screen.getByTestId('ButtonGrid');
	expect(linkElement).toBeDefined()
});

test('Autonomous button press', () => {

})

describe('Arrows', () => {
	test('uparrow', async () => {
		let renderedButtonGrid = render(<ButtonGrid keyPress={{ char: 'arrowup', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} />);
		let linkElement = await screen.findByRole('button', {name: '↑'});
		expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
		renderedButtonGrid.rerender(<ButtonGrid keyPress={{ char: 'arrowleft', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} />)
		linkElement = await screen.findByRole('button', {name: '←'});
		expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
	})
})