import styled from 'styled-components'

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
			border: 3px solid black; 
			border-radius: 20px; 
			overflow: hidden;
		}
	
	`

	static readonly FlexContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	`

}
