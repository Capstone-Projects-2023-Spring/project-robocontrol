import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';


// test to check if the About component renders without any issues

describe('About component', () => {
    test('renders About component', () => {
      render(<About />);
      const aboutElement = screen.getByTestId('about-container');
      expect(aboutElement).toBeInTheDocument();
    });
  });
  