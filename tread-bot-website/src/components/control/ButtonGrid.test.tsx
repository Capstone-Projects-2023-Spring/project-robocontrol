import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGrid from './ButtonGrid';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`
const commands_ws = new WebSocket(COMMANDS_WS_URL)

let user: UserEvent;

beforeEach(() => {
	user = userEvent.setup()
})

test('Render button grid', () => {
	render(<ButtonGrid
		keyPress={{ char: '', keyDown: false }}
		commands_ws={commands_ws}
		setAutonomous={() => {}}
	/>);
	const linkElement = screen.getByTestId('ButtonGrid');
	expect(linkElement).toBeDefined()
});

test('Move robot with key-presses', async () => {
	let view = render(<ButtonGrid keyPress={{ char: 'arrowup', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} testing />);
	let linkElement = await screen.findByRole('button', {name: '↑'});
	expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
	view.rerender(<ButtonGrid keyPress={{ char: 'arrowleft', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} testing />)
	linkElement = await screen.findByRole('button', {name: '←'});
	expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
	view.rerender(<ButtonGrid keyPress={{ char: 'arrowdown', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} testing />)
	linkElement = await screen.findByRole('button', {name: '↓'});
	expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
	view.rerender(<ButtonGrid keyPress={{ char: 'arrowright', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} testing />)
	linkElement = await screen.findByRole('button', {name: '→'});
	expect(linkElement.getAttribute('style')?.includes('rgb(152, 164, 252)')).toBeTruthy()
});

test('Autonomous button', async () => {
	render(<ButtonGrid keyPress={{ char: 'arrowup', keyDown: true }} commands_ws={commands_ws} setAutonomous={() => {}} testing />);
	await user.click(screen.getByRole('button', {name: 'AUTONOMOUS'}));
	const linkElement = screen.getByRole('button', {name: 'AUTONOMOUS'})
	expect(linkElement.getAttribute('style')?.includes('rgb(80, 200, 120)')).toBeTruthy()
});
