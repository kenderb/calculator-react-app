import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { calculatorResults: '0' };
  }

  componentDidUpdate() {
    this.onUpdate();
  }

  onUpdate() {
    const { results } = this.props;
    this.setState({ calculatorResults: results });
  }

  render() {
    const { calculatorResults } = this.state;
    return (
      <div>
        <p>
          results:
        </p>
        {calculatorResults}
      </div>
    );
  }
}

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
