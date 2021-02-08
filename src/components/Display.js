import PropTypes from 'prop-types';

const Display = ({ results }) => (
  <div>
    {results}
  </div>
);

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
