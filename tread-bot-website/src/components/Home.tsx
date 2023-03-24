import React from 'react';
import HomeStyles from './HomeStyles';

const Home = () => (
  <HomeStyles.HomeContainer>
    <HomeStyles.LogoContainer>
      <HomeStyles.RoboControlBox>ROBOCONTROL</HomeStyles.RoboControlBox>
    </HomeStyles.LogoContainer>
    <HomeStyles.NavigationContainer>
      <HomeStyles.NavigationColumn>
        {/* First column content */}
      </HomeStyles.NavigationColumn>
      <HomeStyles.NavigationColumn>
        {/* Second column content */}
      </HomeStyles.NavigationColumn>
    </HomeStyles.NavigationContainer>
    <HomeStyles.FooterContainer>
      {/* Your footer here */}
    </HomeStyles.FooterContainer>
  </HomeStyles.HomeContainer>
);

export default Home;
