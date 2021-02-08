import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  };

  render() {
    const { buttonName } = this.props;
    return (
      <button type="button" onClick={() => this.handleClick(buttonName)}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
