import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has a main title', () => {
  render(<App />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("Helo");
});
