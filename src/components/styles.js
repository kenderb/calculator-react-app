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
  width: 700px;
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
  background: ${props => (props.color ? '#f5913e' : '#gray')};
`;

export {
  DisplayContainer, CalculatorContainer, PanelContainer, StyledButton,
};
