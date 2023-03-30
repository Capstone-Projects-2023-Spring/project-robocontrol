// Third party imports
import React, { useEffect, useState } from 'react'

// Custom styles
import Styles from './ControlStyles'
import Login from '../login/Login'
import ButtonGrid from './ButtonGrid'

const Control = (): React.ReactElement => {
	const [loggedIn, login] = useState<boolean>(false);
	const [key, setKey] = useState({char: '', keyDown: false})

	// Allow bot to be controlled by WASD keys on keyboard
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (loggedIn && !event.repeat) {
				setKey({char: event.key.toLowerCase(), keyDown: true})
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			if (loggedIn) {
				setKey({char: event.key.toLowerCase(), keyDown: false})
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [loggedIn]);

	return (

		// Give camera feed its own container to avoid overlapping with WASD controls
		<Styles.FlexContainer>
			{/* Display the Base64 image string sent from the robot */}
			<Styles.VideoFeedContainer>
				<img src={'https://ryanhodge.net/stream/original'} alt='Video stream from robot'/>
				<img src={'https://ryanhodge.net/stream/color_detection'} alt='Color detection stream'/>
			</Styles.VideoFeedContainer>

			{ !loggedIn ? <Login loginSuccessful={login} /> : <ButtonGrid keyPress={key}/> }

		</Styles.FlexContainer>
	)
}

export default Control
