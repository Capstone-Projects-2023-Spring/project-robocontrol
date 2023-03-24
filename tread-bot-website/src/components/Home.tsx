import React from 'react';
import HomeStyles from './HomeStyles';

const Home = () => (
  <HomeStyles.HomeContainer>
    <HomeStyles.LogoContainer>
      <HomeStyles.RoboControlBox>ROBOCONTROL</HomeStyles.RoboControlBox>
    </HomeStyles.LogoContainer>
    <HomeStyles.NavigationContainer>
      <HomeStyles.LeftNavigationColumn>
        <HomeStyles.ControlsContainer>
          {/* Controls content */}
        </HomeStyles.ControlsContainer>
        <HomeStyles.ControlBox>
          CONTROL
        </HomeStyles.ControlBox>
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

export default Home;
