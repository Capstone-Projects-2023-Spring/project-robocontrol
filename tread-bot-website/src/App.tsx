import { useEffect, useState } from "react";
import Styles from "./AppStyles";

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

type MsgData = {
	direction: string
	turn: string
	image: string
}

function App() {
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

	return (
		<Styles.AppContainer>
			{/* Send a message to the robot */}
			<button onClick={() => sendMessage('backward')}>Forward</button>
			<button onClick={() => sendMessage('forward')}>Backward</button>
			<button onClick={() => sendMessage('right')}>Right</button>
			<button onClick={() => sendMessage('left')}>Left</button>
			<button onClick={() => sendMessage('no')}>Stop</button>

			{/* Display the Base64 image string sent from the robot */}
			{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/> : ''}
		</Styles.AppContainer>
	);
}

export default App;
