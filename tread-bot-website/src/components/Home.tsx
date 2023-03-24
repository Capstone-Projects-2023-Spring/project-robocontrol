import React from 'react';
import HomeStyles from './HomeStyles';
import controlsImage from '../assets/images/controlsimage.png';
import { PATHS } from '../tools/Constants';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATHS.CONTROL);
  };

  return (
    <HomeStyles.HomeContainer>
      <HomeStyles.LogoContainer>
        <HomeStyles.RoboControlBox>ROBOCONTROL</HomeStyles.RoboControlBox>
      </HomeStyles.LogoContainer>
      <HomeStyles.NavigationContainer>
        <HomeStyles.LeftNavigationColumn>
          <HomeStyles.ControlsContainer>
            <HomeStyles.ControlsImage />
          </HomeStyles.ControlsContainer>
          <HomeStyles.ControlButton onClick={handleClick}>
            CONTROL
          </HomeStyles.ControlButton>
        </HomeStyles.LeftNavigationColumn>
        <HomeStyles.RightNavigationColumn>
          <HomeStyles.AboutContainer>
            {/* About content */}
          </HomeStyles.AboutContainer>
          <HomeStyles.AboutBox>
            ABOUT
          </HomeStyles.AboutBox>
        </HomeStyles.RightNavigationColumn>
      </HomeStyles.NavigationContainer>
      <HomeStyles.FooterContainer>
        {/* Your footer here */}
      </HomeStyles.FooterContainer>
    </HomeStyles.HomeContainer>
  );
};

export default Home;
