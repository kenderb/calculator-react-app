import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next } = this.state;
    this.setState(calculate({ total, next, operation: buttonName }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <>
        <p>
          total:
          {' '}
          {total}
        </p>
        <p>
          next number:
          {' '}
          {next}
        </p>
        <p>
          operation:
          {' '}
          {operation}
        </p>
        <br />
        <br />
        <Display results={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
