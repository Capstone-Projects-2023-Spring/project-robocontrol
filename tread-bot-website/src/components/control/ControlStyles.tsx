import styled from 'styled-components'
import { COLORS } from '../../tools/Constants' 	

export default class ControlStyles {
    static readonly ControlContainer = styled.div`
        height: 100%;
		display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: calc(var(--vh) * 0.4) calc(var(--vh) * 0.7) calc(var(--vh) * 0.5);
        justify-items: center;
        align-items: center;

        & > img {
            width: 90%;
            max-height: 90%;
            color: ${COLORS.TEXT};
            border: 3px solid;
            padding: 0.25em;
            box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 6px 6px 0px 0px, 7px 7px 0px 0px, 20px 20px 13px rgba(0, 0, 0, 0.3); 
        }
	`

    static readonly ButtonContainer = styled.div`
        height: 100%;
        grid-area: 2 / 1 / 2 / 3;
    `
}
