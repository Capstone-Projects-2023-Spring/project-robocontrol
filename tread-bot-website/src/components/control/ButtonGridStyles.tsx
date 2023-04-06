import styled from 'styled-components'
import { COLORS } from '../../tools/Constants' 	

export default class ButtonGridStyles {
	static readonly ButtonGridContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(7, 100px);
		grid-template-rows: repeat(6, 100px);
		gap: 15px;
		justify-content: center;
		align-content: center;
		width: 100%;
	`;

	static readonly DirectionButton = styled.button`
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-size: 12px;
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
		font-family: "Open Sans", sans-serif;
		font-size: 16px;
		font-weight: bold;
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

		background: linear-gradient(-45deg, #F894A4, #F9D1B7);
    	background-size: 400% 400%;
    	animation: gradient 5s ease infinite;

		&:active {
			box-shadow: 0px 0px 0px 0px;
			top: 5px;
			left: 5px;
		}

		@media (min-width: 768px) {
			padding: 0.25em 0.75em;
		}
	`


	// Add a new styled component called Label
	static readonly Labels = styled.div`
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
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
	
		}

		&:active {
			
		}
	`;
}
