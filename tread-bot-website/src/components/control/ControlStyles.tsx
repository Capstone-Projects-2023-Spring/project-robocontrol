import styled from 'styled-components'
import { COLORS } from '../../tools/Constants' 	

export default class ControlStyles {
	static readonly ControlContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(7, 10vw);
		grid-template-rows: repeat(4, 12vh);
		gap: 1.5vw;
		justify-content: center;
		align-content: center;
		width: 100%;
	`;

	static readonly VideoFeedContainer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 50px;

		img {
			color: ${COLORS.TEXT};
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
}
