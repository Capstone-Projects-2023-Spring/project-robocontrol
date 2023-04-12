import React from 'react';
import waitingIcon from '../../assets/waitingLogo.gif';

interface WaitingQueueProps {
  isConnected: boolean;
  isTurn: boolean;
  queuePosition: number | null;
}

const WaitingQueue: React.FC<WaitingQueueProps> = ({ isConnected, isTurn, queuePosition }) => {
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
            <img src={waitingIcon} alt="Waiting icon" style={{ width: '50px' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default WaitingQueue;
