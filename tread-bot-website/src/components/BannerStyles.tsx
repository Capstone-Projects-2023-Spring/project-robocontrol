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
        background-color: ${COLORS.OFFWHITE};
        border: 3px solid black;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);	

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
