import React, { useState } from 'react';
import { LoginContainer, InputContainer } from './LoginStyles';

type LoginProps = {
	loginSuccessful: Function
}

const Login = (props: LoginProps): React.ReactElement => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async () => {
		setError('');

		try {
			const response = await fetch('http://localhost:9001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				console.log('Login successful');
				props.loginSuccessful(true)
		 
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
			<h1>Login to Control</h1>
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
			<button onClick={handleLogin}>Login</button>
			<p style={{ color: error ? 'red' : 'blue', marginTop: '1cm' }}>
				{error ? 'Username or Password is not correct, please try again.' : ''}
			</p>
		</LoginContainer>
	);
};

export default Login;
