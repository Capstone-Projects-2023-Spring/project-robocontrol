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

	return (

		// give camera feed its own container to avoid overlapping with WASD controls
		<FlexContainer>
			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/> : ''}
			</Styles.VideoFeedContainer>

			<Styles.ControlContainer>
				{/* Send a message to the robot */}
				<button style={{ gridArea: "1 / 2" }} onMouseDown={() => sendMessage('backward')} onMouseUp={() => sendMessage('no')}>W</button>
				<button style={{ gridArea: "2 / 2" }} onMouseDown={() => sendMessage('forward')} onMouseUp={() => sendMessage('no')}>S</button>
				<button style={{ gridArea: "2 / 3" }} onMouseDown={() => sendMessage('right')} onMouseUp={() => sendMessage('no')}>D</button>
				<button style={{ gridArea: "2 / 1" }} onMouseDown={() => sendMessage('left')} onMouseUp={() => sendMessage('no')}>A</button>
				<button style={{ gridArea: "3 / 2" }} onClick={() => sendMessage('no')}>Stop</button>
			</Styles.ControlContainer>
		</FlexContainer>
	)
}

export default Control
