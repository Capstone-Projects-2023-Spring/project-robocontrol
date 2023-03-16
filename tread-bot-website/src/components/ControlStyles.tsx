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

	
}
