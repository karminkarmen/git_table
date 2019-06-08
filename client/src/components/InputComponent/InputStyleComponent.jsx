import styled from 'styled-components';

const InputStyleComponent = styled.input.attrs({
  type: 'text',
})`
  font-size: ${props => props.theme.fontSizes.medium};
  border-radius: ${props => props.theme.radius.medium};
  border: 2px solid ${props => props.theme.colors.main};
  padding: ${props => props.theme.paddings.medium};
  background: transparent;
  color: ${props => props.theme.colors.backgroundLighten};
  margin-bottom: 1rem;

  ::placeholder {
    color: ${props => props.theme.colors.backgroundLighten};
  }

  &:focus {
    outline: none;
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.main};
  }
`;

export default InputStyleComponent;
