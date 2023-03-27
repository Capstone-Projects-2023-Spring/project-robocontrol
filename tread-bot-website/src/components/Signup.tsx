// Signup.tsx
import bcrypt from 'bcryptjs';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../tools/Constants';
import { SignupContainer, InputContainer } from './SignupStyles';

const Signup = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(false);
  const navigate = useNavigate();


  const handleSignup = async () => {
    console.log('handleSignup called with:', { username, password, confirmPassword, email, phone });
    
    if (!username) {
      setErrorMessage('Please Enter Your Username');
      return;
    }
    if (!password) {
      setErrorMessage('Please Enter Your Password');
      return;
    }
    if (!confirmPassword) {
      setErrorMessage('Please Enter to Confirm Your Password');
      return;
    }
    if (!email) {
      setErrorMessage('Please Enter Your Email');
      return;
    }
    if (!phone) {
      setErrorMessage('Please Enter Your Phone Number');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Your Password is not Matched');
      return;
    }

    /* hash password */
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, hashedPassword, confirmPassword, email, phone }),
      });
      
  
      if (response.ok) {
        setErrorMessage('Congrats! You\'ve signed up successfully!');
        setSuccessMessage(true);
        setShowLoginButton(true);
        console.log('User data saved');
      } else {
        setErrorMessage('Error saving user data');
        setSuccessMessage(false);
        console.error('Error saving user data');
      }
    } catch (error) {
        console.error('Error:', error);
      }
      fetch('http://localhost:3001/signup', {
        // ...
      })
        .then((response) => {
          // ...
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
  };

  return (
    <SignupContainer>
      <h1>Sign Up</h1>
      <InputContainer>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputContainer>
      <button onClick={handleSignup}>Sign Up</button>

       {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
      <p style={{ color: successMessage ? 'orange' : 'blue', marginTop: '1cm' }}>
        {errorMessage}
      </p>

      {showLoginButton && (
        <button onClick={() => navigate(PATHS.Login)}>
          Login
        </button>
      )}
    </SignupContainer>
  );
};

export default Signup;
