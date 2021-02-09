import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Quote from './Quote';
import Home from './Home';
import { Main } from './styles';
import Calculator from './Calculator';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/quote">
          <Main>
            <Quote />
          </Main>
        </Route>
        <Route path="/calculator">
          <Main>
            <Calculator />
          </Main>
        </Route>
        <Route path="/">
          <Main>
            <Home />
          </Main>
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
