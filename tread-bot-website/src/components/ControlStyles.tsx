import styled, { css } from 'styled-components'

export default class ControlStyles {
	static readonly ControlContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(3, 100px);
		grid-template-rows: repeat(3, 100px);
		gap: 15px;
		justify-content: center;
		align-content: center;
		width: 100%;
	`

	static readonly VideoFeedContainer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 50px;

		img {

				color: #000;
				border: 3px solid;
				padding: 0.25em;
				box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 6px 6px 0px 0px, 7px 7px 0px 0px, 20px 20px 13px rgba(0, 0, 0, 0.3);	
				
     		
		}
	
	`

	static readonly FlexContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	`

	static readonly DirectionButton = styled.button`
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-size: 16px;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		color: #000;
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
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		color: #000;
		cursor: pointer;
		border: 3px solid;
		padding: 0.25em 0.5em;
		box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);	
		position: relative;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		}

		&:active {
		box-shadow: 0px 0px 0px 0px;
		top: 5px;
		left: 5px;
		}

		@media (min-width: 768px) {
		
			padding: 0.25em 0.75em;
		
		}
  
	`


}

