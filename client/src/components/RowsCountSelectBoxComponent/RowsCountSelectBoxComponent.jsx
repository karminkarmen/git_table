import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import ParagraphStyleComponent from '../ParagraphStyleComponent';
import RowsCountSelect from '../RowsCountSelectComponent/RowsCountSelectComponent';
import RowsCountSelectBoxStyleComponent from './RowsCountSelectBoxStyleComponent';

const RowsCountSelectBoxComponent = () => (
  <RowsCountSelectBoxStyleComponent>
    <ThemeProvider theme={theme}>
      <ParagraphStyleComponent>Rows per page:</ParagraphStyleComponent>
    </ThemeProvider>
    <ThemeProvider theme={theme}>
      <RowsCountSelect />
    </ThemeProvider>
  </RowsCountSelectBoxStyleComponent>
);

export default RowsCountSelectBoxComponent;
