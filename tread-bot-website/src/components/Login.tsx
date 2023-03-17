import React, { useState } from 'react';
import { LoginContainer, InputContainer } from './LoginStyles';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <InputContainer>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      {error && (
        <div className="error">
          {error === 'username'
            ? 'The username you entered is incorrect.'
            : 'The password you entered is incorrect.'}
        </div>
      )}
      <button onClick={handleLogin}>Login</button>
    </LoginContainer>
  );
};

export default Login;
