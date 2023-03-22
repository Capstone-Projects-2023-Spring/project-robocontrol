import React, { useState } from 'react';
import Styles from './LoginStyles';

type LoginProps = {
	loginSuccessful: Function
}

const Login = (props: LoginProps): React.ReactElement => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [usernameFocused, setUsernameFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	//for animation on login button when enter key is pressed
	const [buttonFocused, setButtonFocused] = useState(false);


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
		console.log('Login button clicked');
	};

	//to handle enter keypress as login
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
					id="username"
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
					id="password"
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
				{error ? 'Username or Password is not correct, please try again.' : ''}
			</p>
		</Styles.LoginContainer>
	);
};

export default Login;
