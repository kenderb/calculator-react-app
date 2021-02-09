import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

test('renders correctly', () => {
  const tree = create(<Display results="results" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays 0', () => {
  render(<Display results="0" />);
  const number = screen.getByText('0');
  expect(number).toBeInTheDocument();
});
