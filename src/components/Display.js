import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor({ results }) {
    super({ results });
    this.state = { calculatoResults: '0' };
  }

  render() {
    const { calculatoResults } = this.state;
    return (
      <div>
        <p>
          results:
        </p>
        {calculatoResults}
      </div>
    );
  }
}

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
