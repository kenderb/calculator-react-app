import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Display from './Display';
import Quote from './Quote';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Home from './Home';
import { CalculatorContainer } from './styles';

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setText] = useState(null);
  const [operation, operationText] = useState(null);

  const updateState = ({ total, next, operation }) => {
    setTotal(total);
    setText(next);
    operationText(operation);
  };

  const handleClick = buttonName => {
    let results = {};
    if (operation) {
      results = calculate({ total, next, operation: buttonName }, operation);
      updateState(results);
    } else {
      results = calculate({ total, next, operation: buttonName });
      updateState(results);
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/quote-of-the-day">
            <Quote />
          </Route>
          <Route path="/calculator">
            <CalculatorContainer>
              <Display results={operation ? next : total} />
              <ButtonPanel clickHandler={handleClick} />
            </CalculatorContainer>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
