import { useEffect, useState } from "react";
import Styles from "./AppStyles";

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

type MsgData = {
	command: string
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
		setImg(await new Response(event.data).text())
	}

	const sendMessage = (command: string) => {
		const data: MsgData = {
			command: command
		}

		ws.send(JSON.stringify(data))
	}

	return (
		<Styles.AppContainer>
			{/* Send a message to the robot */}
			<button onClick={() => sendMessage('forward')}>Move Forward</button>
			<button onClick={() => sendMessage('backward')}>Move Backward</button>

			{/* Display the Base64 image string sent from the robot */}
			{img ? <img src={`data:image/jpg;base64,${img}`} alt='Stream from robot'/>: ''}
		</Styles.AppContainer>
	);
}

export default App;
