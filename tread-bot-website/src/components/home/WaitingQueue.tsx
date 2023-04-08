import React, { useState, useEffect } from 'react';
import waitingIcon from '../../assets/waitingLogo.gif';// add waiting logo

interface WaitingQueueProps {
  onQueuePositionChange: (position: number | null) => void;
}

const WaitingQueue: React.FC<WaitingQueueProps> = ({ onQueuePositionChange }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTurn, setIsTurn] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [queuePosition, setQueuePosition] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://ryanhodge.net/ws/commands'); // websocket address here

    ws.addEventListener('open', () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true);
    });

    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'your_turn') {
        setIsTurn(true);
      } else if (message.type === 'queue_position') {
        setQueuePosition(message.position);
        onQueuePositionChange(message.position);
      }
    });

    ws.addEventListener('close', () => {
      console.log('Disconnected from WebSocket server');
      setIsConnected(false);
      setIsTurn(false);
    });

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [onQueuePositionChange]);

  return (
    <div>
      {isConnected ? (
        <p>Connected to the WebSocket server.</p>
      ) : (
        <p>Not connected to the WebSocket server.</p>
      )}

      {isTurn ? (
        <div>
          <p>You can use now!</p>
        </div>
      ) : (
        <div>
          <p>
            Waiting for your turn...{' '}
            {queuePosition !== null && `You are at position ${queuePosition} in the queue.`}
          </p>
          {queuePosition !== null && (
            <img src={waitingIcon} alt="Waiting icon" style={{ width: '50px' }} /> // add waiting logo
          )}
        </div>
      )}
    </div>
  );
};

export default WaitingQueue;
