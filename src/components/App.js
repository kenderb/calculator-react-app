import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    if (operation) this.setState(calculate({ total, next, operation: buttonName }, operation));
    else this.setState(calculate({ total, next, operation: buttonName }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <>
        <Display results={operation ? next : total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
