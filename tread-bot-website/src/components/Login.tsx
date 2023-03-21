import React, { useState } from 'react';
import Styles from './LoginStyles';

type LoginProps = {
	loginSuccessful: Function
}

const Login = (props: LoginProps): React.ReactElement => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async () => {
		setError('');
		const endpoint = window.location.hostname === 'localhost' ? 'http://localhost:9001/login' : 'https://ryanhodge.net/login'
		try {
			const response = await fetch(endpoint, {
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
		<Styles.LoginContainer>
			<h1>Login to Control</h1>
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
			
			<Styles.LoginButton onClick={handleLogin}>Login</Styles.LoginButton>

			<p style={{ color: error ? 'red' : 'blue', marginTop: '1cm' }}>
				{error ? 'Username or Password is not correct, please try again.' : ''}
			</p>
		</Styles.LoginContainer>
	);
};

export default Login;
