// Third party imports
import React, { useEffect, useState } from 'react';
import WaitingQueue from '../home/WaitingQueue';

// Custom styles
import Styles from './ControlStyles';
import Login from '../login/Login';
import ButtonGrid from './ButtonGrid';

const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`;
const commands_ws = new WebSocket(COMMANDS_WS_URL); // A websocket for the robot commands

const Control = (): React.ReactElement => {
	const [loggedIn, login] = useState<boolean>(false);
	const [key, setKey] = useState({ char: '', keyDown: false });
	const [queuePosition, setQueuePosition] = useState<number | null>(null);

	// Allow bot to be controlled by WASD keys on keyboard
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (loggedIn && !event.repeat) {
				setKey({char: event.key.toLowerCase(), keyDown: true})
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			if (loggedIn) {
				setKey({char: event.key.toLowerCase(), keyDown: false})
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [loggedIn]);

	return (
		// Give camera feed its own container to avoid overlapping with WASD controls
		<Styles.FlexContainer>
			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				<img src={'https://ryanhodge.net/stream/original'} alt='Video stream from robot'/>
				<img src={'https://ryanhodge.net/stream/color_detection'} alt='Color detection stream'/>
			</Styles.VideoFeedContainer>

			{!loggedIn ? (<Login loginSuccessful={login} />) : (<ButtonGrid keyPress={key} commands_ws={commands_ws} />)}

			<Styles.WaitingQueueContainer>
				<WaitingQueue onQueuePositionChange={setQueuePosition} />
				{queuePosition !== null && (<p>Your position in the waiting queue: {queuePosition}</p>)}
			</Styles.WaitingQueueContainer>
		</Styles.FlexContainer>
	);
};

export default Control