import React from 'react';
import { render, screen } from '@testing-library/react';
import {SuspenseApp, TransitionApp} from './App';

test('renders learn react link', () => {
  render(<SuspenseApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
