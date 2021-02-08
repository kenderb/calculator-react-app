import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ buttonName, onClickBtn }) => (
  <StyledButton
    type="button"
    onClick={() => onClickBtn(buttonName)}
    color={
          buttonName === 'X'
          || buttonName === '='
          || buttonName === '-'
          || buttonName === '+'
          || buttonName === '÷'
      }
    wide={buttonName === '0'}
  >
    {buttonName}
  </StyledButton>
);
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
export default Button;
