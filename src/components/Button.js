import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: green;
  border-radius: 15px;
  padding: 0.5em;
  border: none;
  font-size: 1.3em;
  &:active {
    background: ${props => (props.isactive === true ? 'white' : 'green')};
    color: white;
  }
`;
