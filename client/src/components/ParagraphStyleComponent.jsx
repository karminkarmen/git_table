import styled from 'styled-components';

const ParagraphStyleComponent = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.backgroundLighten};
  margin: 0;
`;

export default ParagraphStyleComponent;
