import styled from 'styled-components';

const DisplayContainer = styled.div`
  padding: 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  background-color: #858693;
  color: white;
  height: 100px;
  font-weight: bold;
`;

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    height: 100px;
  }
`;

const StyledButton = styled.button`
  font-size:1.5rem;
  height: 100%;
  width: ${props => (props.wide ? '50%' : '25%')};
  border: #e8e8e8 0.1px solid;
  background: ${props => (props.color === 'true' ? '#f5913e' : '#gray')};
  &:hover {
    background: #cfe0f0;
    color: #f5913e;
  }
`;
const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  a {
    background-color: #f5913e;
    border-radius: 0.5em;
    padding: 1em;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    &:hover {
      transform: scale(2);
    }
  }
  padding: 1em;
  margin: 0.5em 0 6em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ul {
    margin-left: auto;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      padding:  0 0.5em 0 0.5em;
    }
    
  }
`;

const Logo = styled.div`
  a {
    padding: 0.5em;
    font-size: 2.6em;
    background: transparent;
    color: #3171F5;
  }
`;

const Section = styled.section`
  margin: 4em;
  color: white;
  h1 {
    font-size: 2.3em;
    padding: 0  0 1em;
  }
  
  p {
    font-size: 1.5em;
    line-height: 1.5em;
    margin-top: 1em;
  }
`;
const Calculator = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 3em;
  margin: auto;
  max-width: 95em;
  
`;

const CalculatorContainer = styled.div`
  margin-left: auto;
  width: 100%;
  max-width: 700px;
`;

const QuoteContainer = styled.p`
color: white;
  text-align:center;
  margin: auto;
  padding: 5em;
  font-size: 2em;
  line-height: 1.3em;
`;

const Main = styled.main`
  background-color: #0e0e0ea1;
  margin: 8em;
  padding: 2em;
  border-radius: 3em;
`;

export {
  DisplayContainer, CalculatorContainer, PanelContainer, StyledButton,
  NavStyle, Logo, Section, Calculator, QuoteContainer, Main,
};
