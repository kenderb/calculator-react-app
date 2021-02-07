import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  };

  render() {
    const divStyle = {
      display: 'flex',
      justifyContent: 'center',
    };
    const buttons = [
      { name: 'group1', values: ['AC', '+/-', '%', '÷'] },
      { name: 'group2', values: ['7', '8', '9', 'X'] },
      { name: 'group3', values: ['4', '5', '6', '-'] },
      { name: 'group4', values: ['1', '2', '3', '+'] },
      { name: 'group5', values: ['0', '.', '='] },
    ];
    return (
      <div>
        {buttons.map(item => (
          <div key={item.name} style={divStyle}>
            {item.values.map(itemButton => (
              <Button
                buttonName={itemButton}
                key={itemButton}
                onClickHandler={() => this.handleClick(itemButton)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
