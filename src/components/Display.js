import PropTypes from 'prop-types';

const divStyle = {
  fontSize: '2em',
  display: 'flex',
  justifyContent: 'center',
  padding: '0.5em',
  backgroundColor: 'gray',
  color: 'white',
  margin: '0.5em auto',
  borderRadius: '1em',
};
const Display = ({ results }) => (
  <div style={divStyle}>
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
