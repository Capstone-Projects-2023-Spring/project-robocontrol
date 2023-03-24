import styled from 'styled-components';
import { COLORS } from '../tools/Constants';
import controlsImage from '../assets/images/controlsimage.png';

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
	margin-right: 100px;
  `;

static readonly ControlsContainer = styled.div`
  background-image: url(${controlsImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
  height: auto;
  grid-row: 1 / 3;
  border-radius: 8px;
  box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
`;

  static readonly ControlBox = styled(HomeStyles.RoboControlBox)`
    grid-row: 3;
	width: 150px;
    height: 49px;
	font-size: 16px;
	margin-left: 100px;
  `;

  static readonly RightNavigationColumn = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    /* border: solid orange; */
    grid-column: 2;
	justify-content: left;
	margin-left: 100px;
  `;

  static readonly AboutContainer = styled.div`
    background-color: white;
    width: 350px;
    grid-row: 1 / 3;
	border-radius: 8px;
    box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
  `;

  static readonly AboutBox = styled(HomeStyles.RoboControlBox)`
    grid-row: 3;
	width: 150px;
    height: 49px;
	font-size: 16px;
	margin-left: 100px;
  `;

  static readonly FooterContainer = styled.div`
    display: none;
  `;
}
