import React from 'react';
import HomeStyles from './HomeStyles';
import { PATHS } from '../../tools/Constants';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
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
          <HomeStyles.ControlButton onClick={() => handleClick(PATHS.CONTROL)}>
            CONTROL
          </HomeStyles.ControlButton>
        </HomeStyles.LeftNavigationColumn>
        <HomeStyles.RightNavigationColumn>
          <HomeStyles.AboutContainer>
            <HomeStyles.AboutImage />
          </HomeStyles.AboutContainer>
          <HomeStyles.AboutButton onClick={() => handleClick(PATHS.ABOUT)}>
            ABOUT
          </HomeStyles.AboutButton>
        </HomeStyles.RightNavigationColumn>
      </HomeStyles.NavigationContainer>
      <HomeStyles.FooterContainer>
        {/* Your footer here */}
      </HomeStyles.FooterContainer>
    </HomeStyles.HomeContainer>
  );
};

export default Home;
