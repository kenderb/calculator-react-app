import { create } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

test('renders correctly', () => {
  const tree = create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays heading', () => {
  render(<Calculator />);
  const h1 = screen.getByText('Let’s do some math!');
  expect(h1).toBeInTheDocument();
});

test('displays numbers', () => {
  render(<Calculator />);
  const button = screen.getByText('2');
  expect(button).toBeInTheDocument();
});

test('displays operator', () => {
  render(<Calculator />);
  const button = screen.getByText('+');
  expect(button).toBeInTheDocument();
});

test('displays correct result', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('displays correct result on division', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('÷'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('1')).toBeInTheDocument();
});
