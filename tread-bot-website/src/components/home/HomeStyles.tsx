import styled from 'styled-components';
import { COLORS, FONT_FAMILY } from '../../tools/Constants';
import controlsImage from '../../assets/images/controlsimage.png';
import aboutImage from '../../assets/images/aboutimage.png';

export default class HomeStyles {
	static readonly HomeContainer = styled.div`
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: calc(var(--vh) * 0.1) calc(var(--vh) * 0.45) calc(var(--vh) * 0.2);
		justify-items: center;
		align-items: center;
	`;

	static readonly RoboControlBox = styled.div`
		grid-area: 1 / 1 / 2 / 3;
		display: flex;
		justify-content: center;
		align-items: center;
		${FONT_FAMILY.BUTTON}
		cursor: default;
		font-size: calc(var(--vh) * 0.024);
		background-color: ${COLORS.OFFWHITE};
		width: calc(var(--vh) * 0.4);
		height: 60%;
	`;

	static readonly ControlsImage = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(var(--vh) * 0.4);
		height: calc(var(--vh) * 0.4);
		background-color: ${COLORS.OFFWHITE};
		border-radius: 15px;
		box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);

		& > div {
			background-image: url(${controlsImage});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 80%;
			height: 80%;
			border-radius: 15px;
			box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
		}
	`;

	static readonly ControlButton = styled.button`
		align-self: start;
		${FONT_FAMILY.BUTTON}
		font-size: calc(var(--vh) * 0.025);
		width: 50%;
		height: 30%;

		&:active {
			box-shadow: 0px 0px 0px 0px;
			top: 5px;
			left: 5px;
		}

		@media (min-width: 768px) {
			padding: 0.25em 0.75em;
		}
	`;

	static readonly AboutImage = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(var(--vh) * 0.4);
		height: calc(var(--vh) * 0.4);
		background-color: ${COLORS.OFFWHITE};
		border-radius: 15px;
		box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);

		& > div {
			background-image: url(${aboutImage});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 80%;
			height: 80%;
			border-radius: 15px;
			box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
		}
	`;

	static readonly AboutButton = styled.button`
		align-self: start;
		${FONT_FAMILY.BUTTON}
		font-size: calc(var(--vh) * 0.025);
		width: 50%;
		height: 30%;

		&:active {
			box-shadow: 0px 0px 0px 0px;
			top: 5px;
			left: 5px;
		}

		@media (min-width: 768px) {
			padding: 0.25em 0.75em;
		}
	`;

	static readonly FooterContainer = styled.div`
		display: none;
	`;
}
