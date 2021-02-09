import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('renders correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays the heading', () => {
  render(<Home />);
  const number = screen.getByText('Welcome to our page!');
  expect(number).toBeInTheDocument();
});
