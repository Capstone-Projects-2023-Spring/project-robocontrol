import styled from 'styled-components';

export default class LoginStyles {
	static readonly LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-height: 20vh;
    max-height: 25vh;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  `;

    static readonly InputContainer = styled.div`
    position: relative;
    border-bottom: 2px solid grey;
    margin-bottom: 1.5rem;

    label {
    position: absolute;
    left: 0;
    top: -0.5em;
    font-size: 0.9em;
    color: grey;
    }

    input {
    background: none;
    border: none;
    outline: none;
    color: grey;
    padding: 0.5rem 0;
    }
    `;
}
