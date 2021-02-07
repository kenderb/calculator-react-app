import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = buttonName => {
    const { onClickHandler } = this.props;
    onClickHandler(buttonName);
  };

  render() {
    const buttonStyle = {
      fontSize: '2em',
      padding: '0.8em',
    };
    const { buttonName } = this.props;
    return (
      <button type="button" onClick={() => this.handleClick(buttonName)} style={buttonStyle}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default Button;
