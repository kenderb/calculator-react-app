import PropTypes from 'prop-types';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '0.5em',
  backgroundColor: 'gray',
  color: 'white',
  width: '25vw',
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
