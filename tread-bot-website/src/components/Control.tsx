// Third party imports
import React, { useEffect, useState } from 'react'
import { COLORS } from '../tools/Constants'

// Custom styles
import Styles from './ControlStyles'
import Login from './Login'

type MsgData = {
	direction: string
	turn: string
	image: string
}

// Type to use for robot movement
type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean
}

type dir_content = {
	grid: string,
	direction: string,
	character: string
}

const direction_buttons: dir_content[] = [
	{ grid: '1 / 2', direction: 'backward', character: 'W' },
	{ grid: '2 / 1', direction: 'left', character: 'A' },
	{ grid: '2 / 2', direction: 'forward', character: 'S' },
	{ grid: '2 / 3', direction: 'right', character: 'D' }
]
const activeStyle = { boxShadow: '0px 0px 0px 0px', top: '5px', left: '5px' };
const wasd_default: wasd = {forward: false, backward: false, left: false, right: false}

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

const Control = (): React.ReactElement => {
	const [img, setImg] = useState('');
	const [loggedIn, login] = useState(false)

	// Activity states to make buttons change color when activated
	const [activeMovement, setActiveMovement] = useState<wasd>(wasd_default);

	useEffect(() => {
		const interval = setInterval(() => {ws.send('')}, 50);
		return () => clearInterval(interval);
	}, []);

	ws.onmessage = async (event: MessageEvent<any>) => {
		// event.data is given as a blob (since it is an unrecognized data type)
		// Convert this blob to UTF-8 text for display purposes
		const json_data: MsgData = JSON.parse(await new Response(event.data).text())
		setImg(json_data.image)
	}

	const sendMessage = (command: string) => {
		let direction, turn;
		let active = {...wasd_default};

		command !== 'no' ? active[command] = true : active = wasd_default
		setActiveMovement(active)
		
		// Messy because two commands are needed, a turn command and forward/backward
		direction = 
			command === 'right' ? 'no' :
			command === 'left' ? 'no' :
			command === 'forward' ? command :
			command === 'backward' ? command : command
		turn = 
			command === 'right' ? command :
			command === 'left' ? command :
			command === 'forward' ? 'no' :
			command === 'backward' ? 'no' : 'no'

		const data: MsgData = {
			direction: direction,
			turn: turn,
			image: ''
		}

		ws.send(JSON.stringify(data))
	}

	// Allow bot to be controlled by WASD keys on keyboard
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (loggedIn) {
				switch (event.key.toLowerCase()) {
					case 'w': sendMessage('backward'); break;
					case 'a': sendMessage('left'); break;
					case 's': sendMessage('forward'); break;
					case 'd': sendMessage('right'); break;
				}
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			if ('wasd'.includes(event.key.toLowerCase()) && loggedIn) sendMessage('no');
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const renderDirections = (): React.ReactElement[] => {
		const directionButtons: React.ReactElement[] = []
		direction_buttons.forEach((direction, i) => {
			directionButtons.push(
				<Styles.DirectionButton
					style={{
						gridArea: direction.grid,
						backgroundColor: activeMovement[direction.direction] ? COLORS.PRESSBUTTON : COLORS.UNPRESSBUTTON,
						...(activeMovement[direction.direction] ? activeStyle : {}),
					}}
					onMouseDown={() => sendMessage(direction.direction)}
					onMouseUp={() => sendMessage('no')}
					key={i} >{direction.character}</Styles.DirectionButton>
			)
		})
		return directionButtons
	}

	return (

		// Give camera feed its own container to avoid overlapping with WASD controls
		<Styles.FlexContainer>
			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/> : ''}
			</Styles.VideoFeedContainer>

			{
				!loggedIn ?
				<Login loginSuccessful={login}/> :
				<Styles.ControlContainer>
					{/* Send a message to the robot */}
					{renderDirections()}

					{/* <Styles.StopButton
						style={{ gridArea: "3 / 2" }}
						onClick={() => sendMessage('no')}>Stop
					</Styles.StopButton> */}

				</Styles.ControlContainer>
			}

		</Styles.FlexContainer>
	)
}

export default Control
