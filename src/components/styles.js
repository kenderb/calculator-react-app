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
`;

const CalculatorContainer = styled.div`
  margin: ${marginContainer} auto ${marginContainer};
  width: 700px;
`;

export { DisplayContainer, CalculatorContainer };
