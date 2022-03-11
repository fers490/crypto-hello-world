import { render, screen } from '@testing-library/react';
import App from './App';

import * as web3 from './hooks/web3'

test('renders main components', () => {
  jest.spyOn(web3, 'useProvider').mockImplementation(() => {return {getSigner: () => {}}});
  jest.spyOn(web3, 'useContract').mockImplementation(() => {return {}});
  render(<App />);
  const firstButton = screen.getByText(/Get message/i);
  expect(firstButton).toBeInTheDocument();
  const secondButton = screen.getByText(/Set destination/i);
  expect(secondButton).toBeInTheDocument();
  const firstInput = screen.getByPlaceholderText(/New destination/i);
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByPlaceholderText(/Current message/i);
  expect(secondInput).toBeInTheDocument();
});
