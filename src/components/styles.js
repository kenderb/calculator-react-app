import styled from 'styled-components';

const marginContainer = '2rem';

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

const CalculatorContainer = styled.div`
  margin: ${marginContainer} auto ${marginContainer};
  width: 100%;
  max-width: 700px;
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
  display:flex;
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
    font-size: 1.5em;
    background: transparent;
    color: #3171F5;
  }
`;

export {
  DisplayContainer, CalculatorContainer, PanelContainer, StyledButton,
  NavStyle, Logo,
};
