import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, onClickBtn }) => (
  <button type="button" onClick={() => onClickBtn(buttonName)}>
    {buttonName}
  </button>
);
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
export default Button;
