import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import Styles from './LoginStyles';

type LoginProps = {
  loginSuccessful: Function;
};

const Login = (props: LoginProps): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [buttonFocused, setButtonFocused] = useState(false);
	
  // Initialize socket and connect to the robot_commands_ws server
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const newSocket = io('ws://192.168.2.1:10334'); //websocket address to robot
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleLogin = async () => {
    setError('');
    const endpoint = 'https://ryanhodge.net/login';
    let response;
    try {
      if (window.location.hostname !== 'localhost') {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
      }

	  if (window.location.hostname === 'localhost' || response?.ok) {
        console.log('Login successful');
        props.loginSuccessful(true);

        // Send login and username to the robot
        if (socket) {
          socket.emit('login', { username });
        }
      } else {
        const data = await response?.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Login button clicked');
  };
  
  const handleEnterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setButtonFocused(true);
      handleLogin();
      setTimeout(() => setButtonFocused(false), 100);
    }
  };

  return (
    <Styles.LoginContainer>
      <Styles.Heading>Controls</Styles.Heading>
      <Styles.InputContainer>
        {!usernameFocused && !username && (
          <label htmlFor="username">Username</label>
        )}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ paddingTop: '0.25rem' }}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
          onKeyDown={handleEnterKeyPress}
        />
      </Styles.InputContainer>
      <Styles.InputContainer>
        {!passwordFocused && !password && (
          <label htmlFor="password">Password</label>
        )}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ paddingTop: '0.25rem' }}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          onKeyDown={handleEnterKeyPress}
        />
      </Styles.InputContainer>
	  <Styles.LoginButton
        onClick={handleLogin}
        isFocused={buttonFocused}
      >
        Login
      </Styles.LoginButton>
      <p style={{ color: error ? 'red' : 'blue', marginTop: '1cm' }}>
        {error
          ? 'Username or Password is not correct, please try again.'
          : ''}
      </p>
    </Styles.LoginContainer>
  );
};

export default Login;
