import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor({ results }) {
    super({ results });
    this.state = { results: '0' };
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <p>
          results:
        </p>
        {results}
      </div>
    );
  }
}

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
