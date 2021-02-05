import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Display = ({ results }) => {
  const [calculatorResults, useCalculatorResults] = useState('0');

  useEffect(() => {
    useCalculatorResults(results);
  }, [results]);

  return (
    <div>
      <p>
        results:
      </p>
      {calculatorResults}
    </div>
  );
};

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
