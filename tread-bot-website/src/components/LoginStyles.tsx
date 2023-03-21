import styled from 'styled-components';

export default class LoginStyles {
	static readonly LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding: 2rem;
    min-height: 20vh;
    max-height: 25vh;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  `;

    static readonly InputContainer = styled.div`
    position: relative;
    border-bottom: 2px solid lightgrey;
    margin-bottom: 1.5rem;
    padding-top: .1rem;
    font-weight: bold;
    

    label {
    position: absolute;
    left: 0;
    font-size: 0.9em;
    color: grey;
    }

    input {
    background: none;
    border: none;
    outline: none;
    color: grey;
    padding: 0;
    }
    `;

    static readonly LoginButton = styled.button`
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 20px; // add a margin to create spacing between the input and the button
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
    }

    @media (min-width: 768px) {
        padding: 0.25em 0.75em;
    }
    `;


    static readonly Heading = styled.h1`
        font-family: 'Poppins-Bold', sans-serif;
        font-size: 30px;
        color: #333;
        padding-bottom: 30px;
        padding-top: 30px;
        font-weight: bold;
        
    `;

  

}
