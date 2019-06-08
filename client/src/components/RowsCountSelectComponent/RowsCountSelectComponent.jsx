import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import { rowsCount } from '../../actions/pagination';
import RowsCountSelectStyleComponent from './RowsCountSelectStyleComponent';

const RowsCountSelect = props => (
  <ThemeProvider theme={theme}>
    <RowsCountSelectStyleComponent onChange={props.rowsCount}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </RowsCountSelectStyleComponent>
  </ThemeProvider>
);

export default connect(
  null,
  { rowsCount }
)(RowsCountSelect);
