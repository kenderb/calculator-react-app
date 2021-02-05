import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: '0',
    };
  }

  componentDidUpdate() {
    this.onchange();
  }

  onchange() {
    const { total, next } = this.state;
    this.setState(
      {
        total: calculate({ total, next }),
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
