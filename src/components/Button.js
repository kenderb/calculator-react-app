import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ZeroStyledButton } from './styles';

const Button = ({ buttonName, onClickBtn }) => {
  if (buttonName !== '0') {
    return (
      <StyledButton type="button" onClick={() => onClickBtn(buttonName)}>
        {buttonName}
      </StyledButton>
    );
  }
  return (
    <ZeroStyledButton type="button" onClick={() => onClickBtn(buttonName)}>
      {buttonName}
    </ZeroStyledButton>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
export default Button;
