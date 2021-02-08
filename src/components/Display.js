import PropTypes from 'prop-types';
import { DisplayContainer } from './styles';

const Display = ({ results }) => (
  <DisplayContainer>
    {results}
  </DisplayContainer>
);

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
