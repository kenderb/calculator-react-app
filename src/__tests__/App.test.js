import { create } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays heading', () => {
  render(<App />);
  const h1 = screen.getByText('Welcome to our page!');
  expect(h1).toBeInTheDocument();
});

test('has link to calculator', () => {
  render(<App />);
  const a = screen.getByText('Calculator').closest('a');
  expect(a).toHaveAttribute('href', '/calculator');
});

test('has link to Home', () => {
  render(<App />);
  const a = screen.getByText('Home').closest('a');
  expect(a).toHaveAttribute('href', '/');
});

test('has link to Quote', () => {
  render(<App />);
  const a = screen.getByText('Quote').closest('a');
  expect(a).toHaveAttribute('href', '/quote');
});
