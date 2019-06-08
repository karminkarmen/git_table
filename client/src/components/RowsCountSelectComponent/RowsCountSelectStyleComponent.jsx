import styled from 'styled-components';

const RowsCountSelectStyleComponent = styled.select`
  font-size: ${props => props.theme.fontSizes.medium};
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.backgroundLighten};
  background: none;
  &:focus {
    outline: none;
  }
`;

export default RowsCountSelectStyleComponent;
