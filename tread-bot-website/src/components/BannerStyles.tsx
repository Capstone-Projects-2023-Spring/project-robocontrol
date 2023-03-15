import { Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { COLORS } from '../tools/Constants'
import BGPattern from '../assets/background-pattern.png'
import { Link } from 'react-router-dom'

export default class BannerStyles {
	static readonly OffcanvasContainer = styled(Offcanvas)`
        background-image: url(${BGPattern});
        background-color: ${COLORS.PRIMARY};
	`

    static readonly OffcanvasBody = styled(Offcanvas.Body)`
        display: flex;
        flex-direction: column;

        & > .first-link {
            border-top: 1px solid #00000088;
        }
    `

    static readonly LinkCont = styled(Link)`
        padding: 2%;
        padding-left: 10%;
        transition: background-color 0.5s ease;
        color: ${COLORS.TEXT};
        text-decoration: none;
        border-bottom: 1px solid black;

        &:hover {
            background-color: ${COLORS.HOVER + '88'};
            color: black;
        }
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
