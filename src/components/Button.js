import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  fontSize: '2em',
  padding: '0.8em',
};
const Button = ({ buttonName, clickHandler }) => (
  <button type="button" onClick={() => clickHandler(buttonName)} style={buttonStyle}>
    {buttonName}
  </button>
);
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
