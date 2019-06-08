import styled from 'styled-components';

const ButtonStyleComponent = styled.a`
  margin: 1em 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.medium};
  padding: ${props => props.theme.paddings.medium};
  border-radius: ${props => props.theme.radius.medium};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.main};
  background: ${props => props.theme.colors.main};

  &:hover {
    background: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.main};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonStyleComponent;
