import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

test('renders correctly', () => {
  const tree = create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays the heading', () => {
  render(<Quote />);
  const number = screen.getByText(
    'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
  );
  expect(number).toBeInTheDocument();
});
