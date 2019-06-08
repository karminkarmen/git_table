import * as React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Table } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';
import { sliceRepositories, setPageNumber } from '../../actions/pagination';
import RepositoriesTableHeader from './RepositoriesTableHeader';
import RepositoriesTableBody from './RepositoriesTableBody';
import RepositoriesTableFooter from './RepositoriesTableFooter';
import { getSlicedData } from '../../actions/pagination.js';
import theme from '../../configs/theme';
import ParagraphStyleComponent from '../ParagraphStyleComponent';

class RepositoriesTable extends React.Component {
  componentDidMount() {
    const { getSlicedData } = this.props;
    getSlicedData();
  }

  componentDidUpdate(prevProps) {
    const {
      pageNumber,
      sliceRepositories,
      rowsCount,
      repositoryName,
      getSlicedData,
      repositories,
      setPageNumber,
    } = this.props;

    let pagesCount = Math.ceil(repositories.length / rowsCount);

    if (prevProps.repositoryName !== repositoryName) {
      getSlicedData();
    }

    if (
      rowsCount !== prevProps.rowsCount ||
      pageNumber !== prevProps.pageNumber
    ) {
      sliceRepositories();
    }

    if (pageNumber > pagesCount) {
      setPageNumber(pagesCount - 1);
    }
  }

  render() {
    const { hasErrored, isLoading, repositories } = this.props;

    if (repositories.length === 0) {
      return (
        <ThemeProvider theme={theme}>
          <ParagraphStyleComponent>No results</ParagraphStyleComponent>
        </ThemeProvider>
      );
    }

    if (hasErrored) {
      return (
        <ThemeProvider theme={theme}>
          <ParagraphStyleComponent>
            Sorry! There was an error loading the items
          </ParagraphStyleComponent>
        </ThemeProvider>
      );
    }

    if (isLoading) {
      return (
        <Dimmer active>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Table sortable celled fixed inverted>
        <RepositoriesTableHeader />
        <RepositoriesTableBody />
        <RepositoriesTableFooter />
      </Table>
    );
  }
}

const mapStateToProps = state => {
  const {
    pageNumber,
    slicedRepositories,
    repositories,
    direction,
    column,
    rowsCount,
    repositoryName,
  } = state;
  return {
    pageNumber,
    repositories,
    slicedRepositories,
    hasErrored: state.repositoriesHasErrored,
    isLoading: state.repositoriesIsLoading,
    direction,
    column,
    rowsCount,
    repositoryName,
  };
};

export default connect(
  mapStateToProps,
  { sliceRepositories, getSlicedData, setPageNumber }
)(RepositoriesTable);
