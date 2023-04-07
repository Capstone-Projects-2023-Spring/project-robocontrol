import styled from 'styled-components'
import { COLORS } from '../../tools/Constants'  

export default class ButtonGridStyles {
    static readonly ButtonGridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(12vh, 2fr));
        gap: 15px;
        justify-content: center;
        align-content: center;
        width: 95%;
    `;

    static readonly DirectionButton = styled.button`
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        font-size: 2vw;
        letter-spacing: .2vw;
        text-decoration: none;
        text-transform: uppercase;
        color: ${COLORS.TEXT};
        cursor: pointer;
        border: 3px solid;
        padding: 1vw 1vw;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3); 
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: pre;

        &:active {
            box-shadow: 0px 0px 0px 0px;
            top: 5px;
            left: 5px;
        }
        
        @media (min-width: 768px) {
            padding: 0.25em 0.75em;
        }
    `

    static readonly StopButton = styled.button`
        font-family: "Open Sans", sans-serif;
        font-size: 3vw;
        font-weight: bold;
        letter-spacing: .2vw;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        color: ${COLORS.TEXT};
        cursor: pointer;
        border: 3px solid;
        padding: .5vw .5vw;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3); 
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        background: linear-gradient(-45deg, #F894A4, #F9D1B7);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        animation: gradient 5s ease infinite;

        &:active {
            box-shadow: 0px 0px 0px 0px;
            top: 1vh;
            left: 1vw;
        }

        @media (min-width: 768px) {
            padding: 0.25vw 0.75vh;
        }
    `


    // Add a new styled component called Label
    static readonly Labels = styled.div`
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        font-size: 3vw;
        letter-spacing: .2vw;
        text-decoration: none;
        text-transform: uppercase;
        color: ${COLORS.TEXT};
        margin-top: 30px;
        margin-left: 90px;
        height: 8vw; //changed this
        width: 16vw;
        border: 3px solid;
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;    
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: auto;
        min-width: min-content; 
    `;

    static readonly Modes = styled.button`
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        font-size: 2vw;
        letter-spacing: .2vw;
        text-decoration: none;
        text-transform: uppercase;
        color: ${COLORS.TEXT};
        border: 3px solid;
        //got rid of margins and borders because they wren't playing nice with flexible sizing
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;    
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: auto;
        min-width: min-content; //currently won't let button go smaller than word, is this how we want to go?

    `;
}

