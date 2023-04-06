import React from "react";
import { COLORS } from "../../tools/Constants";
import Styles from './ButtonGridStyles'

type KeyPress = { char: string, keyDown: boolean }
type DirectionContent = { grid: string, command: string, character: string, text: string }
type MsgData = { direction: string, turn: string, shoulder: string, claw: string, elbow: string }
type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean,
	shoulderUp: boolean,
	shoulderDown: boolean,
	clawOpen: boolean,
	clawClose: boolean
}

const direction_buttons: DirectionContent[] = [
	{ grid: '2 / 2', command: 'forward', text: '↑', character: 'arrowup' },
	{ grid: '3 / 1', command: 'left', text: '←', character: 'arrowleft' },
	{ grid: '3 / 2', command: 'backward', text: '↓', character: 'arrowdown' },
	{ grid: '3 / 3', command: 'right', text: '→', character: 'arrowright' },
	{ grid: '2 / 6', command: 'shoulderUp', text: 'UP\nW', character: 'w' }, // added up button
	{ grid: '3 / 6', command: 'shoulderDown', text: 'DOWN\nS', character: 's' }, // added down button
	{ grid: '3 / 5', command: 'clawOpen', text: 'OPEN\nA', character: 'a' }, // added left button
	{ grid: '3 / 7', command: 'clawClose', text: 'CLOSE\nD', character: 'd' }, // added right button
]

const wasd_default: wasd = { forward: false, backward: false, left: false, right: false, shoulderDown: false, shoulderUp: false, clawOpen: false, clawClose: false }
const activeStyle = { boxShadow: '0px 0px 0px 0px', top: '5px', left: '5px', backgroundColor: COLORS.PRESSBUTTON };

export default class ButtonGrid extends React.Component<{ keyPress: KeyPress, commands_ws: WebSocket }, { activeMovement: wasd }> {
	constructor(props: { keyPress: KeyPress, commands_ws: WebSocket }) {
		super(props)
		this.state = { activeMovement: wasd_default }
	}

	/**
	 * Get the current wasd value based on the current state of the button pressing
	 */
	getActiveMovementFromChar = (key?: KeyPress): wasd => {
		let activity = this.state?.activeMovement ?? wasd_default
		direction_buttons.forEach(direction => {
			if (direction.character === (key?.char ?? this.props.keyPress.char)) {
				activity[direction.command] = (key?.keyDown ?? this.props.keyPress.keyDown)
				// console.log(activity)
				// console.log(direction.command)
				// console.log(activity[direction.command])
			}
		})
		return activity
	}

	componentDidUpdate(): void {
		this.sendMessage(this.getActiveMovementFromChar())
	}

	sendMessage = (active: wasd, cmd?: string) => {
		if (cmd) {
			this.props.commands_ws.send(cmd)
			return
		}
		const data: MsgData = { direction: '', turn: '', shoulder: '', elbow: '', claw: '' }

		if (active.shoulderUp) { data.shoulder = 'up' }
		else if (active.shoulderDown) { data.shoulder = 'down' }
		else { data.shoulder = 'no' }

		if (active.clawOpen) { data.claw = 'open' }
		else if (active.clawClose) { data.claw = 'close' }
		else { data.claw = 'no' }

		if (active.forward) { data.direction = 'forward' }
		else if (active.backward) { data.direction = 'backward' }
		else { data.direction = 'no' }

		if (active.left) { data.turn = 'left' }
		else if (active.right) { data.turn = 'right' }
		else { data.turn = 'no' }

		console.log(data)
		this.props.commands_ws.send(JSON.stringify(data))
	}

	renderDirections = (): React.ReactElement[] => {
		const directionButtons: React.ReactElement[] = []
		direction_buttons.forEach((direction, i) => {
			directionButtons.push(
				<Styles.DirectionButton
					style={{
						gridArea: direction.grid,
						backgroundColor: COLORS.UNPRESSBUTTON,
						...(this.getActiveMovementFromChar()[direction.command] ? activeStyle : {})
					}}
					onMouseDown={() => { this.sendMessage(this.getActiveMovementFromChar({ char: direction.character, keyDown: true })) }}
					onMouseUp={() => { this.sendMessage(this.getActiveMovementFromChar({ char: direction.character, keyDown: false })) }}
					key={i} >{direction.text}</Styles.DirectionButton>
			)
		})
		return directionButtons
	}

	render(): React.ReactElement {
		return (
			<Styles.ButtonGridContainer>
				{/* Send a message to the robot */}
				{this.renderDirections()}

				<Styles.StopButton
					style={{ gridArea: "5 / 4" }}
				>Stop
				</Styles.StopButton>

				<Styles.Modes
					style={{ gridArea: "1 / 3" }}
					onClick={() => this.sendMessage(wasd_default, 'autonomous')}>Autonomous
				</Styles.Modes>
				<Styles.Modes
					style={{ gridArea: "2 / 3" }}
					onClick={() => this.sendMessage(wasd_default, 'manual')}>Manual
				</Styles.Modes>

				<Styles.Labels style={{ gridArea: "4 / 1" }}>TREADS</Styles.Labels>
				{/* Add the "ARM/CLAW" text container */}
				<Styles.Labels style={{ gridArea: "4 / 5" }}>ARM/CLAW</Styles.Labels>
			</Styles.ButtonGridContainer>
		)
	}
}