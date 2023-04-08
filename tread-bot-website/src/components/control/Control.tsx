// Third party imports
import React, { useEffect, useState } from 'react';

// Custom styles
import Styles from './ControlStyles';
import Login from '../login/Login';
import ButtonGrid from './ButtonGrid';
import WaitingQueue from '../home/WaitingQueue'; // Import WaitingQueue

const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`;
const commands_ws = new WebSocket(COMMANDS_WS_URL); // A websocket for the robot commands

const Control = (): React.ReactElement => {
  const [loggedIn, login] = useState<boolean>(false);
  const [key, setKey] = useState({ char: '', keyDown: false });
  const [queuePosition, setQueuePosition] = useState<number | null>(null); // Add queuePosition state

  // Allow bot to be controlled by WASD keys on keyboard
  useEffect(() => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key.toLowerCase() === 'arrowup' || event.key.toLowerCase() === 'arrowdown') {
			event.preventDefault()
		}
		if (loggedIn && !event.repeat) {
			setKey({char: event.key.toLowerCase(), keyDown: true})
		}
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.key.toLowerCase() === 'arrowup' || event.key.toLowerCase() === 'arrowdown') {
			event.preventDefault()
		}
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

  // Add new useEffect hook for WebSocket message handling
  useEffect(() => {
    commands_ws.addEventListener('message', handleWebSocketMessage);

    return () => {
      commands_ws.removeEventListener('message', handleWebSocketMessage);
    };
  }, []);

  const handleWebSocketMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    // Update queuePosition
    if (data.queue_position !== undefined) {
      setQueuePosition(data.queue_position);
    }
  };

  return (
    // Give camera feed its own container to avoid overlapping with WASD controls
    <Styles.FlexContainer>
      {/* Display the Base64 image string sent from the robot */}
      {/* ... */}

      {!loggedIn ? (
        <Login loginSuccessful={login} />
      ) : (
        <ButtonGrid keyPress={key} commands_ws={commands_ws} queuePosition={queuePosition} />
      )}

      <Styles.WaitingQueueContainer>
        <WaitingQueue onQueuePositionChange={setQueuePosition} />
{queuePosition !== null && (
<p>Your position in the waiting queue: {queuePosition}</p>
)}
</Styles.WaitingQueueContainer>
</Styles.FlexContainer>
);
};

export default Control;
