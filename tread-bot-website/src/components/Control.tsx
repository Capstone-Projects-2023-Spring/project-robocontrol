// Third party imports
import React, { useEffect, useState } from 'react'

// Custom styles
import Styles from './ControlStyles'

type MsgData = {
	direction: string
	turn: string
	image: string
}

type wasd = {
	[index: string]: boolean,
	forward: boolean,
	backward: boolean,
	left: boolean,
	right: boolean
}

const wasd_default: wasd = {forward: false, backward: false, left: false, right: false}

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

const Control = (): React.ReactElement => {
	const [img, setImg] = useState('');

	//activity states to make buttons change color when activated
	const [activeMovement, setActiveMovement] = useState({forward: false, backward: false, left: false, right: false});
	const [forwardActive, setForwardActive] = useState(false);
	const [backwardActive, setBackwardActive] = useState(false);
	const [leftActive, setLeftActive] = useState(false);
	const [rightActive, setRightActive] = useState(false);

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
		let active = wasd_default;
		command !== 'no' ? active[command] = true : active = wasd_default
		setActiveMovement(active)
		
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
	
	const activeStyle = {
		boxShadow: '0px 0px 0px 0px',
		top: '5px',
		left: '5px',
	};
	

	//allow bot to be controlled by WASD keys on keyboard
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key.toLowerCase()) {
				case 'w':
					sendMessage('backward');
					setBackwardActive(true);
					break;
				case 'a':
					sendMessage('left');
					setLeftActive(true);
					break;
				case 's':
					sendMessage('forward');
					setForwardActive(true);
					break;
				case 'd':
					sendMessage('right');
					setRightActive(true);
					break;
				default:
					break;
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			switch (event.key.toLowerCase()) {
				case 'w':
				case 's':
				case 'a':
				case 'd':
					sendMessage('no');
					setBackwardActive(false);
					setForwardActive(false);
					setLeftActive(false);
					setRightActive(false);
					break;
				default:
					break;
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	return (

		// give camera feed its own container to avoid overlapping with WASD controls
		<Styles.FlexContainer>

			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/> : ''}
			</Styles.VideoFeedContainer>

			<Styles.ControlContainer>


				{/* Send a message to the robot */}
				<Styles.DirectionButton
					style={{
						gridArea: "1 / 2",
						backgroundColor: backwardActive ? "#98a4fc" : "#f0ecec",
						...(backwardActive ? activeStyle : {}),
					}}
					onMouseDown={() => {
						setBackwardActive(true);
						sendMessage('backward');
					}}
					onMouseUp={() => {
						setBackwardActive(false);
						sendMessage('no');
					}}
				>
					W
				</Styles.DirectionButton>
				<Styles.DirectionButton
					style={{
						gridArea: "2 / 2",
						backgroundColor: forwardActive ? "#98a4fc" : "#f0ecec",
						...(forwardActive ? activeStyle : {}),
					}}
					onMouseDown={() => {
						setForwardActive(true);
						sendMessage('forward');
					}}
					onMouseUp={() => {
						setForwardActive(false);
						sendMessage('no');
					}}
				>
					S
				</Styles.DirectionButton>
				<Styles.DirectionButton
					style={{
						gridArea: "2 / 3",
						backgroundColor: rightActive ? "#98a4fc" : "#f0ecec",
						...(rightActive ? activeStyle : {}),
					}}
					onMouseDown={() => {
						setRightActive(true);
						sendMessage('right');
					}}
					onMouseUp={() => {
						setRightActive(false);
						sendMessage('no');
					}}
				>
					D
				</Styles.DirectionButton>
				<Styles.DirectionButton
					style={{
						gridArea: "2 / 1",
						backgroundColor: leftActive ?  "#98a4fc" : "#f0ecec",
						...(leftActive ? activeStyle : {}),
					}}
					onMouseDown={() => {
						setLeftActive(true);
						sendMessage('left');
					}}
					onMouseUp={() => {
						setLeftActive(false);
						sendMessage('no');
					}}
				>
					A
				</Styles.DirectionButton>
				{/* <Styles.StopButton
					style={{ gridArea: "3 / 2" }}
					onClick={() => sendMessage('no')}>Stop
				</Styles.StopButton> */}

			</Styles.ControlContainer>
		</Styles.FlexContainer>
	)
}

export default Control
