import styled from 'styled-components';
import { COLORS } from '../tools/Constants';
import controlsImage from '../assets/images/controlsimage.png';
import aboutImage from '../assets/images/aboutimage.png';
import { Link } from 'react-router-dom';


export default class HomeStyles {
  static readonly HomeContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    height: 100vh;
  `;

  static readonly RoboControlBox = styled.div`
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${COLORS.TEXT};
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);
    width: 300px;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: ${COLORS.OFFWHITE};
  `;

  static readonly LogoContainer = styled.div`
    /* border: solid red; */
    display: flex;
    justify-content: center;
    text-align: center;
    grid-row: 1 / 3;
  `;

  static readonly NavigationContainer = styled.div`
    /* border: solid blue; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-row: 3 / 7;
  `;

  static readonly LeftNavigationColumn = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    /* border: solid orange; */
    grid-column: 1;
	justify-content: right;
	margin-right: 50px;
  `;

static readonly ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 450px;
  grid-row: 1 / 3;
  background-color: ${COLORS.OFFWHITE};
  border-radius: 15px;
  box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
`;

static readonly ControlsImage = styled.div`
  background-image: url(${controlsImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  border-radius: 15px;
  box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
`;

static readonly ControlButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.TEXT};
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  grid-row: 3;
  width: 150px;
  height: 49px;
  margin-left: 150px;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;
  

  static readonly RightNavigationColumn = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    /* border: solid orange; */
    grid-column: 2;
	justify-content: left;
	margin-left: 50px;
  `;

  static readonly AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 450px;
  grid-row: 1 / 3;
  background-color: ${COLORS.OFFWHITE};
  border-radius: 15px;
  box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
`;

static readonly AboutImage = styled.div`
  background-image: url(${aboutImage}); // Use aboutImage here instead of controlsImage
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  border-radius: 8px;
  box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
`;


static readonly AboutButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.TEXT};
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  grid-row: 3;
  width: 150px;
  height: 49px;
  margin-left: 150px;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

  static readonly FooterContainer = styled.div`
    display: none;
  `;
}
