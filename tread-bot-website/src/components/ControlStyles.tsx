import styled from 'styled-components'

export default class ControlStyles {
	static readonly ControlContainer = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;

		button {
			width: 100px;
			height: 100px;
			margin: 5px;
		}

	`
}
