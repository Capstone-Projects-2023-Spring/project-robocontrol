import styled from 'styled-components'
import { FONT_FAMILY, COLORS } from '../../tools/Constants';

export default class ButtonGridStyles {
	static readonly ButtonGridContainer = styled.div`
		height: 100%;
		display: grid;
		grid-template-columns: repeat(9, minmax(0, 1fr));
		grid-template-rows: repeat(6, minmax(0, 1fr));
		gap: 15px;
		justify-content: center;
		align-content: center;
		align-self: start;
		margin-left: 5%;
		margin-right: 5%;
	`;

	static readonly DirectionButton = styled.button`
		${FONT_FAMILY.BUTTON}

        &:active {
            box-shadow: 0px 0px 0px 0px;
            top: 5px;
            left: 5px;
        }
        
        @media (min-width: 768px) {
            padding: 0.25em 0.75em;
        }
    `

	static readonly StopButton = styled.button`
		${FONT_FAMILY.BUTTON}
		background: linear-gradient(-45deg, #F894A4, #F9D1B7);
    	background-size: 400% 400%;
    	animation: gradient 5s ease infinite;

        &:active {
            box-shadow: 0px 0px 0px 0px;
            top: 1vh;
            left: 1vw;
        }

        @media (min-width: 768px) {
            padding: 0.25vw 0.75vh;
        }
    `

	static readonly Labels = styled.div`
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-size: calc(var(--vh) * 0.016);
		letter-spacing: 2px;
		padding: 0.25em 0.5em;
		display: flex;
		align-items: center;
	`;

	static readonly Modes = styled.button`
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-size: 16px;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		color: ${COLORS.TEXT};
		margin-top: 30px;
		margin-left: 90px;
		height: 40px;
		width: 150px;
		border: 3px solid;
		padding: 0.25em 0.5em;
		box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;	
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: auto;
	`;
}

