// Third party imports
import React, { useEffect, useState } from 'react';

// Custom styles
import Styles from './ControlStyles';
import Login from '../login/Login';
import ButtonGrid from './ButtonGrid';
import WaitingQueue from '../home/WaitingQueue'; // Import WaitingQueue

const COMMANDS_WS_URL = `wss://ryanhodge.net/ws/commands`;
const commands_ws = new WebSocket(COMMANDS_WS_URL); // A websocket for the robot commands
const doNothing = () => {};


const Control = (): React.ReactElement => {
  const [loggedIn, login] = useState<boolean>(false);
  const [key, setKey] = useState({ char: '', keyDown: false });
  const [queuePosition, setQueuePosition] = useState<number | null>(null); // Add queuePosition state
  const [isConnected, setIsConnected] = useState(false);
  const [isTurn, setIsTurn] = useState(false);

  // Allow bot to be controlled by WASD keys on keyboard
  useEffect(() => {
    // ... (the existing keydown and keyup event listeners)
  }, [loggedIn]);

  // Add new useEffect hook for WebSocket message handling
  useEffect(() => {
    commands_ws.addEventListener('open', handleWebSocketOpen);
    commands_ws.addEventListener('message', handleWebSocketMessage);
    commands_ws.addEventListener('close', handleWebSocketClose);

    return () => {
      commands_ws.removeEventListener('open', handleWebSocketOpen);
      commands_ws.removeEventListener('message', handleWebSocketMessage);
      commands_ws.removeEventListener('close', handleWebSocketClose);
    };
  }, []);

  const handleWebSocketOpen = () => {
    setIsConnected(true);
  };

  const handleWebSocketClose = () => {
    setIsConnected(false);
  };

  const handleWebSocketMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    if (data.type === 'queue_position') {
      setQueuePosition(data.position);
    } else if (data.type === 'your_turn') {
      setIsTurn(true);
    } else {
      console.log('Received WebSocket message:', data);
    }
  };

  return (
    <Styles.FlexContainer>
      {/* ... */}

      {!loggedIn ? (
        <Login loginSuccessful={login} commands_ws={commands_ws} setQueuePosition={doNothing} />
      ) : (
        <ButtonGrid keyPress={key} commands_ws={commands_ws} />
      )}

      <Styles.WaitingQueueContainer>
        <WaitingQueue
          isConnected={isConnected}
          isTurn={isTurn}
          queuePosition={queuePosition}
        />
        {queuePosition === null ? (
          <p>YOUR waiting position is unknown</p>
        ) : (
          <p>Your position in the waiting queue: {queuePosition}</p>
        )}
      </Styles.WaitingQueueContainer>
    </Styles.FlexContainer>
  );
};

export default Control;
