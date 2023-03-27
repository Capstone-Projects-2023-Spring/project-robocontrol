// Third party imports
import React, { useEffect, useState } from 'react'
import { COLORS } from '../tools/Constants'

// Custom styles
import Styles from './ControlStyles'
import Login from './Login'

type MsgData = { direction: string, turn: string}
type VideoData = { image: string, cv2_image: string }
type direction_content = { grid: string, command: string, character: string }

// Type to use for robot movement
type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean
}

const movement = [
	{ command: 'forward', character: 'w'},
	{ command: 'backward', character: 's'},
	{ command: 'left', character: 'a'},
	{ command: 'right', character: 'd'},
	{ command: 'stop', character: ' '}
]

const direction_buttons: direction_content[] = [
	{ grid: '1 / 2', command: 'forward', character: 'W' },
	{ grid: '2 / 1', command: 'left', character: 'A' },
	{ grid: '2 / 2', command: 'backward', character: 'S' },
	{ grid: '2 / 3', command: 'right', character: 'D' }
]
const activeStyle = { boxShadow: '0px 0px 0px 0px', top: '5px', left: '5px', backgroundColor: COLORS.PRESSBUTTON };
const wasd_default: wasd = {forward: false, backward: false, left: false, right: false}

const VIDEO_WS_URL = `wss://ryanhodge.net/ws/video`
const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`
const video_ws = new WebSocket(VIDEO_WS_URL) // A websocket for the video
const commands_ws = new WebSocket(COMMANDS_WS_URL) // A websocket for the robot commands

const Control = (): React.ReactElement => {
	const [img, setImg] = useState('');
	const [cv2Img, setCv2Img] = useState('');
	const [loggedIn, login] = useState(false);

	// Activity states to make buttons change color when activated
	const [activeMovement, setActiveMovement] = useState<wasd>(wasd_default);

	useEffect(() => {
		const interval = setInterval(() => {video_ws.send('')}, 50);
		return () => clearInterval(interval);
	}, []);

	video_ws.onmessage = async (event: MessageEvent<any>) => {
		// event.data is given as a blob (since it is an unrecognized data type)
		// Convert this blob to UTF-8 text for display purposes
		const json_data: VideoData = JSON.parse(await new Response(event.data).text())
		setImg(json_data.image)
		setCv2Img(json_data.cv2_image)
	}

	const sendMessage = (command: string, key?: string) => {
		let active = activeMovement;
		const data: MsgData = {
			direction: '',
			turn: '',
		}

		movement.forEach(direction => {
			if (command !== 'stop' && command === direction.command) active[direction.command] = true 
			else if (key === direction.character) active[direction.command] = false 
		})

		setActiveMovement(active)

		if (active.forward) { data.direction = 'forward' }
		else if (active.backward) { data.direction = 'backward' }
		else { data.direction = 'no' }

		if (active.left) { data.turn = 'left' }
		else if (active.right) { data.turn = 'right' }
		else { data.turn = 'no' }
		
		console.log(data);
		commands_ws.send(JSON.stringify(data))
	}

	// Allow bot to be controlled by WASD keys on keyboard
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (loggedIn && !event.repeat) {
				movement.forEach((direction) => {
					if (event.key.toLowerCase() === direction.character) {
						sendMessage(direction.command)
					}
				})
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			if (loggedIn && 'wasd '.includes(event.key.toLowerCase())) sendMessage('stop', event.key.toLocaleLowerCase());
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [loggedIn]);

	const renderDirections = (): React.ReactElement[] => {
		const directionButtons: React.ReactElement[] = []
		direction_buttons.forEach((direction, i) => {
			directionButtons.push(
				<Styles.DirectionButton
					style={{
						gridArea: direction.grid,
						backgroundColor: COLORS.UNPRESSBUTTON,
						...(activeMovement[direction.command] ? activeStyle : {}),
					}}
					onMouseDown={() => sendMessage(direction.command)}
					onMouseUp={() => sendMessage('stop')}
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
				{cv2Img ? <img src={`data:image/jpg;base64,${cv2Img}`} alt='Stream from robot'/> : ''}
			</Styles.VideoFeedContainer>

			{
				!loggedIn ?
				<Login loginSuccessful={login}/> :
				<Styles.ControlContainer>
					{/* Send a message to the robot */}
					{renderDirections()}

					<Styles.StopButton
						style={{ gridArea: "3 / 2" }}
						onClick={() => sendMessage('stop')}>Stop
					</Styles.StopButton>

				</Styles.ControlContainer>
			}

		</Styles.FlexContainer>
	)
}

export default Control
