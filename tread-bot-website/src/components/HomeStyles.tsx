import styled from 'styled-components';
import { COLORS } from '../tools/Constants' 

const HomeStyles = {

	HomeContainer: styled.div`
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		height: 100vh;
	`,

	RoboControlBox: styled.div`
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
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
		background-color: ${COLORS.OFFWHITE};
	`,

	LogoContainer: styled.div`
		border: solid red;
		display: flex;
		justify-content: center;
		text-align: center;
		grid-row: 1 / 3;
	`,

	NavigationContainer: styled.div`
		border: solid blue;
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: center;
		grid-row: 3 / 7;
	`,

	NavigationColumn: styled.div`
		border: solid orange;
		padding: 1rem;
	`,

	FooterContainer: styled.div`
		display: none;
	`,

};

export default HomeStyles;
