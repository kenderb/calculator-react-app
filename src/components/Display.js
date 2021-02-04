import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor({ results }) {
    super({ results });
    this.state = { calculatoResults: '0' };
  }

  render() {
    this.setState({
      calculatoResults: this.results,
    });
    const { calculatoResults } = this.state;
    return (
      <div>
        this is the result:
        {calculatoResults}
      </div>
    );
  }
}

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
