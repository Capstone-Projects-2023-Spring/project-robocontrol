import React from "react";
import { COLORS } from "../../tools/Constants";
import Styles from './ButtonGridStyles'

type KeyPress = { char: string, keyDown: boolean }
type DirectionContent = { grid: string, command: string, character: string, text: string }
type MsgData = { direction: string, turn: string, shoulder: string, claw: string, elbow: string, camera: string }
type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean,
	shoulderUp: boolean,
	shoulderDown: boolean,
	elbowUp: boolean,
	elbowDown: boolean,
	clawOpen: boolean,
	clawClose: boolean,
	cameraUp: boolean,
	cameraDown: boolean
}

const direction_buttons: DirectionContent[] = [
	{ grid: '2 / 2', command: 'forward', text: '↑', character: 'arrowup' },
	{ grid: '3 / 1', command: 'left', text: '←', character: 'arrowleft' },
	{ grid: '3 / 2', command: 'backward', text: '↓', character: 'arrowdown' },
	{ grid: '3 / 3', command: 'right', text: '→', character: 'arrowright' },
	{ grid: '2 / 6', command: 'shoulderUp', text: 'ARM UP\n(W)', character: 'w' }, // added up button
	{ grid: '3 / 6', command: 'shoulderDown', text: 'ARM DOWN\n(S)', character: 's' }, // added down button
	{ grid: '2 / 5', command: 'elbowUp', text: 'ELBOW UP\n(Q)', character: 'q' }, // added up button
	{ grid: '2 / 7', command: 'elbowDown', text: 'ELBOW DOWN\n(E)', character: 'e' }, // added down button
	{ grid: '3 / 5', command: 'clawOpen', text: 'OPEN\n(A)', character: 'a' }, // added left button
	{ grid: '3 / 7', command: 'clawClose', text: 'CLOSE\n(D)', character: 'd' }, // added right button
	{ grid: '2 / 9', command: 'cameraUp', text: 'CAM UP\n(R)', character: 'r' }, // added right button
	{ grid: '3 / 9', command: 'cameraDown', text: 'CAM DOWN\n(F)', character: 'f' }, // added right button
]

const wasd_default: wasd = { forward: false, backward: false, left: false, right: false, shoulderDown: false, shoulderUp: false, elbowDown: false, elbowUp: false, clawOpen: false, clawClose: false, cameraDown: false, cameraUp: false }
const activeStyle = { boxShadow: '0px 0px 0px 0px', top: '5px', left: '5px', backgroundColor: COLORS.PRESSBUTTON };

export default class ButtonGrid extends React.Component<{ keyPress: KeyPress, commands_ws: WebSocket }, { activeMovement: wasd, autonomousMode: boolean }> {
	constructor(props: { keyPress: KeyPress, commands_ws: WebSocket }) {
		super(props)
		this.state = { activeMovement: wasd_default, autonomousMode: false }
	}

	
	// for changing background color of autonomous button when active
	toggleAutonomousMode = () => {
		this.setState(prevState => ({
			autonomousMode: !prevState.autonomousMode
		}));
	}

	

	/**
	 * Get the current wasd value based on the current state of the button pressing
	 */
	getActiveMovementFromChar = (key?: KeyPress): wasd => {
		let activity = this.state?.activeMovement ?? wasd_default
		direction_buttons.forEach(direction => {
			if (direction.character === (key?.char ?? this.props.keyPress.char)) {
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
		const data: MsgData = { direction: '', turn: '', shoulder: '', elbow: '', claw: '', camera: '' }

		if (active.shoulderUp) { data.shoulder = 'up' }
		else if (active.shoulderDown) { data.shoulder = 'down' }
		else { data.shoulder = 'no' }

		if (active.elbowUp) { data.elbow = 'up' }
		else if (active.elbowDown) { data.elbow = 'down' }
		else { data.elbow = 'no' }

		if (active.clawOpen) { data.claw = 'open' }
		else if (active.clawClose) { data.claw = 'close' }
		else { data.claw = 'no' }

		if (active.cameraUp) { data.camera = 'up' }
		else if (active.cameraDown) { data.camera = 'down' }
		else { data.camera = 'no' }

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
					style={{ gridArea: "5 / 5" }}
				>Stop
				</Styles.StopButton>

				<Styles.ControlsContainer>
					<Styles.Modes
						style={{ 
							// gridArea: "1 / 5",
							backgroundColor: this.state.autonomousMode ? '#50C878' : '#f0ecec'
						}}
						onClick={() => {
							this.toggleAutonomousMode();
							this.sendMessage(wasd_default, 'autonomous');
						}}>AUTONOMOUS
					</Styles.Modes>
				</Styles.ControlsContainer>

				<Styles.Labels style={{ gridArea: "4 / 1" }}>TREADS</Styles.Labels>
				{/* Add the "ARM/CLAW" text container */}
				<Styles.Labels style={{ gridArea: "4 / 5" }}>ARM/CLAW</Styles.Labels>
				<Styles.Labels style={{ gridArea: "4 / 8" }}>CAMERA</Styles.Labels>
			</Styles.ButtonGridContainer>
		)
	}
}