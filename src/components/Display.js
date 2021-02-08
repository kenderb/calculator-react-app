import PropTypes from 'prop-types';

const Display = ({ results }) => (
  <div>
    {results}
  </div>
);

Display.propTypes = {
  results: PropTypes.number.isRequired,
};
export default Display;
