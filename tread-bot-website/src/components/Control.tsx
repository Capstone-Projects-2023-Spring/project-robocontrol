// Third party imports
import React, { useEffect, useState } from 'react'

// Custom styles
import Styles from './ControlStyles'

type MsgData = {
	direction: string
	turn: string
	image: string
}

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

const Control = (): React.ReactElement => {
	const [img, setImg] = useState('');

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
		const direction = 
			command === 'right' ? 'no' :
			command === 'left' ? 'no' :
			command === 'forward' ? command :
			command === 'backward' ? command : command
		const turn = 
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
	
	//import FlexContainer
	const FlexContainer = Styles.FlexContainer;

	//activity states to make buttons change color when activated
	const [forwardActive, setForwardActive] = useState(false);
	const [backwardActive, setBackwardActive] = useState(false);
	const [leftActive, setLeftActive] = useState(false);
	const [rightActive, setRightActive] = useState(false);
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
					break;
				case 's':
					sendMessage('forward');
					break;
				case 'a':
					sendMessage('left');
					break;
				case 'd':
					sendMessage('right');
					break;
				default:
					break;
			}

			switch (event.key.toLowerCase()) {
				case 'w':
					setBackwardActive(true);
					break;
				case 's':
					setForwardActive(true);
					break;
				case 'a':
					setLeftActive(true);
					break;
				case 'd':
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
					break;
				default:
					break;
			}

			switch (event.key.toLowerCase()) {
			case 'w':
				setBackwardActive(false);
				break;
			case 's':
				setForwardActive(false);
				break;
			case 'a':
				setLeftActive(false);
				break;
			case 'd':
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
		<FlexContainer>

			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/> : ''}
			</Styles.VideoFeedContainer>

			<Styles.ControlContainer>


				{/* Send a message to the robot */}
				<Styles.DirectionButton
					style={{
						gridArea: "1 / 2",
						backgroundColor: backwardActive ? "#f0ecec" : "#98a4fc",
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
						backgroundColor: forwardActive ? "#f0ecec" : "#98a4fc",
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
						backgroundColor: rightActive ? "#f0ecec" : "#98a4fc",
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
						backgroundColor: leftActive ? "#f0ecec" : "#98a4fc",
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
			
		</FlexContainer>
	)
}

export default Control
