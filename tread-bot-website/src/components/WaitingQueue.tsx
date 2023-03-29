import React, { useState, useEffect } from 'react';


const WaitingQueue = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTurn, setIsTurn] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:10334');

    ws.addEventListener('open', () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true);
    });

    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'your_turn') {
        setIsTurn(true);
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
  }, []);

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
        <p>Waiting for your turn...</p>
      )}
    </div>
  );
};

export default WaitingQueue;