import PropTypes from 'prop-types';
import { displayStyles } from './styles';

const Display = ({ results }) => (
  <div style={displayStyles}>
    {results}
  </div>
);

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
