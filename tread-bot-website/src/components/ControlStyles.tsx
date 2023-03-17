import styled, { css } from 'styled-components'

export default class ControlStyles {
	static readonly ControlContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(3, 100px);
		grid-template-rows: repeat(3, 100px);
		gap: 5px;
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
			border: 3px solid darkslategray; 
			border-radius: 20px; 
			overflow: hidden;
			padding: 2px;
     		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
		}
	
	`

	static readonly FlexContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	`

	static readonly DirectionButton = styled.button`
		border-color: darkslategray;
		border-radius: 8px;
		margin: 4px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		

		&:hover {
			box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
			transition-duration: .1s;
			}
	`

	static readonly StopButton = styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
		border-radius: 8px;
		border-style: none;
		box-sizing: border-box;
		color: #FFFFFF;
		cursor: pointer;
		flex-shrink: 0;
		font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
		font-size: 16px;
		font-weight: 500;
		height: 4rem;
		padding: 0 1.6rem;
		margin-top: 20px;
		text-align: center;
		text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
		transition: all .5s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;

		&:hover {
		box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
		transition-duration: .1s;
		}

		@media (min-width: 768px) {
		padding: 0 2.6rem;
		}
	`

}


