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
      operation: '',
    };
  }

  componentDidUpdate() {
    this.onchange();
  }

  onchange() {
    const { total, next, operation } = this.state;
    this.setState(
      {
        total: calculate({ total, next, operation }),
      },
    );
  }

  render() {
    const { total } = this.state;

    return (
      <>
        <Display results={total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
