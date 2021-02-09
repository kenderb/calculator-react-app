import { create } from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

test('renders correctly', () => {
  const tree = create(<ButtonPanel clickHandler={() => 'hello'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
