import { Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { COLORS } from '../tools/Constants'
import BGPattern from '../assets/background-pattern.png'

export default class BannerStyles {
	static readonly OffcanvasContainer = styled(Offcanvas)`
        background-image: url(${BGPattern});
        background-color: ${COLORS.PRIMARY};
	`

    static readonly OffcanvasBody = styled(Offcanvas.Body)`
        display: flex;
        flex-direction: column;
    `

    static readonly HamburgerButton = styled.div`
        position: fixed;
        top: 3%;
        left: 3%;
        padding: 1%;
        z-index: 100;
        background-color: ${COLORS.PRIMARY};
        border: 2px solid black;
        border-radius: 4px;

        display: flex;
        align-items: center;
        transition: background-color 0.4s ease;
        
        &:hover {
            cursor: pointer;
            background-color: ${COLORS.HOVER};
        }
        
        & > svg {
            stroke-width: 0.5;
        }
    `
}
