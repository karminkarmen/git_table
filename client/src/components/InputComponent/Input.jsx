import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import theme from '../../configs/theme';
import InputStyleComponent from './InputStyleComponent';
import { setRepositoryName } from '../../actions/input';
import debounce from '../../helpers/debounce';

const Input = props => {
  return (
    <ThemeProvider theme={theme}>
      <InputStyleComponent
        placeholder={props.placeholder}
        onChange={debounce(e => props.setRepositoryName(e.target.value), 1000)}
        defaultValue={props.repositoryName}
      />
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    repositoryName: state.repositoryName,
  };
};

export default connect(
  mapStateToProps,
  { setRepositoryName }
)(Input);
