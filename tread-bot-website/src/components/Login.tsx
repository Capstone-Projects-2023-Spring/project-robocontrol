import React, { useState } from 'react';
import Styles from './LoginStyles';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Info：', { username, password });
  };

  return (
    <Styles.LoginContainer>
      <h1>Login</h1>
      <Styles.InputContainer>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Styles.InputContainer>
      <Styles.InputContainer>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Styles.InputContainer>
      <button onClick={handleLogin}>Login</button>
    </Styles.LoginContainer>
  );
};

export default Login;
