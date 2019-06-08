import styled from 'styled-components';

const HeaderTextStyleComponent = styled.h1`
  text-transform: uppercase;
  letter-spacing: -0.2rem;
  font-weight: bold;
  font-family: 'Heebo', sans-serif;
  margin: 0;
  font-size: ${props => props.theme.fontSizes.big};
  color: ${props => props.theme.colors.main};
`;

const SecondaryHeaderTextStyleComponent = styled.h3`
  position: relative;
  top: -1.8rem;
  left: 8.5rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Heebo', sans-serif;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

export { HeaderTextStyleComponent, SecondaryHeaderTextStyleComponent };
