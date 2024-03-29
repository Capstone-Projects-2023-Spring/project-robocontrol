import React from 'react';
import HomeStyles from './HomeStyles';
import { PATHS } from '../../tools/Constants';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../tools/HelpfulFunctions';

const Home = () => {
	const navigate = useNavigate();

	const handleClick = (path: string) => {
		navigate(path);
		scrollToTop();
	};

	return (
		<HomeStyles.HomeContainer data-testid='Home'>
			<HomeStyles.RoboControlBox>ROBOCONTROL</HomeStyles.RoboControlBox>
			<HomeStyles.ControlsImage><div/></HomeStyles.ControlsImage>
			<HomeStyles.AboutImage><div/></HomeStyles.AboutImage>
			<HomeStyles.ControlButton onClick={() => handleClick(PATHS.CONTROL)}>
				CONTROL
			</HomeStyles.ControlButton>
			<HomeStyles.AboutButton onClick={() => handleClick(PATHS.ABOUT)}>
				ABOUT
			</HomeStyles.AboutButton>
			<HomeStyles.FooterContainer>
				{/* Your footer here */}
			</HomeStyles.FooterContainer>
		</HomeStyles.HomeContainer>
	);
};

export default Home;
