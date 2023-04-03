import React from "react";
import { COLORS } from "../../tools/Constants";
import Styles from './ButtonGridStyles'

type KeyPress = { char: string, keyDown: boolean }
type DirectionContent = { grid: string, command: string, character: string, text: string }
type MsgData = { direction: string, turn: string, arm_command: string }
type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean,
	armup: boolean,
	armdown: boolean,
	clawopen: boolean,
	clawclose: boolean
}

const direction_buttons: DirectionContent[] = [
	{ grid: '1 / 2', command: 'forward', text: 'W', character: 'w' },
	{ grid: '2 / 1', command: 'left', text: 'A', character: 'a' },
	{ grid: '2 / 2', command: 'backward', text: 'S', character: 's' },
	{ grid: '2 / 3', command: 'right', text: 'D', character: 'd' },
	{ grid: '1 / 6', command: 'armup', text: '↑\nUP', character: 'arrowup' }, // added up button
	{ grid: '3 / 6', command: 'armdown', text: 'DOWN\n↓', character: 'arrowdown' }, // added down button
	{ grid: '2 / 5', command: 'clawopen', text: 'OPEN\n←', character: 'arrowleft' }, // added left button
	{ grid: '2 / 7', command: 'clawclose', text: 'CLOSE\n→', character: 'arrowright' }, // added right button
]

const wasd_default: wasd = { forward: false, backward: false, left: false, right: false, armdown: false, armup: false, clawopen: false, clawclose: false }
const activeStyle = { boxShadow: '0px 0px 0px 0px', top: '5px', left: '5px', backgroundColor: COLORS.PRESSBUTTON };

export default class ButtonGrid extends React.Component<{keyPress: KeyPress, commands_ws: WebSocket}, {activeMovement: wasd}> {
	constructor(props: {keyPress: KeyPress, commands_ws: WebSocket}) {
		super(props)
		this.state = { activeMovement: wasd_default }
	}

	/**
	 * Get the current wasd value based on the current state of the button pressing
	 */
	getActiveMovementFromChar = (key?: KeyPress): wasd => {
		let activity = this.state?.activeMovement ?? wasd_default
		direction_buttons.forEach(direction => {
			if (direction.character === (key?.char ?? this.props.keyPress.char)){
				activity[direction.command] = (key?.keyDown ?? this.props.keyPress.keyDown)
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
		console.log(active)
		const data: MsgData = {
			direction: '',
			turn: '',
			arm_command: ''
		}

		if (active.armup) { data.arm_command = 'up' }
		else if (active.armdown) { data.arm_command = 'down' }
		else { data.arm_command = 'no' }

		if (active.clawopen) { data.arm_command = 'clawopen' }
		else if (active.clawclose) { data.arm_command = 'clawclose' }
		else { data.arm_command = 'no' }

		if (active.forward) { data.direction = 'forward' }
		else if (active.backward) { data.direction = 'backward' }
		else { data.direction = 'no' }

		if (active.left) { data.turn = 'left' }
		else if (active.right) { data.turn = 'right' }
		else { data.turn = 'no' }

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
					onMouseDown={() => {this.sendMessage(this.getActiveMovementFromChar({char: direction.character, keyDown: true}))}}
					onMouseUp={() => {this.sendMessage(this.getActiveMovementFromChar({char: direction.character, keyDown: false}))}}
					key={i} >{direction.text}</Styles.DirectionButton>
			)
		})
		return directionButtons
	}

	render (): React.ReactElement {
		return (
			<Styles.ButtonGridContainer>
				{/* Send a message to the robot */}
				{this.renderDirections()}

				<Styles.StopButton
					style={{ gridArea: "3 / 2" }}
					>Stop
				</Styles.StopButton>

				<Styles.Modes
					style={{ gridArea: "5 / 3" }}
					onClick={() => this.sendMessage(wasd_default, 'autonomous')}>Autonomous
				</Styles.Modes>
				<Styles.Modes
					style={{ gridArea: "6 / 3" }}
					onClick={() => this.sendMessage(wasd_default, 'manual')}>Manual
				</Styles.Modes>

				<Styles.Labels style={{ gridArea: "4 / 1" }}>TREADS</Styles.Labels>
				{/* Add the "ARM/CLAW" text container */}
				<Styles.Labels style={{ gridArea: "4 / 5" }}>ARM/CLAW</Styles.Labels>
			</Styles.ButtonGridContainer>
		)
	}
}