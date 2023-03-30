// SignupStyles.tsx
import styled from 'styled-components';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    margin-right: 0.5rem;
  }

  input {
    flex: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: #66ccff;
  margin-top: 2.5cm;
`;
