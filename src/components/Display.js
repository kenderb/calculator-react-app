import PropTypes from 'prop-types';

const Display = ({ results }) => (
  <div>
    <p>
      results:
    </p>
    {results}
  </div>
);

Display.propTypes = {
  results: PropTypes.string,
};
Display.defaultProps = {
  results: 0,
};
export default Display;
