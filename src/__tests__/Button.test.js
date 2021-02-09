import { create } from 'react-test-renderer';
import Button from '../components/Button';

test('renders correctly', () => {
  const tree = create(<Button onClickBtn={() => 'hello'} buttonName="name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
