import { repositoriesFetchData } from './repositories';

export function rowsCount(e) {
  e.persist();
  const count = e.target.value;
  const countNumber = parseInt(count);
  return {
    type: 'ROWS_COUNT',
    countNumber,
  };
}

export function setPageNumber(number) {
  return {
    type: 'PAGE_NUMBER',
    number,
  };
}

export function slicedRepositories(partOfArray) {
  return {
    type: 'SLICED_REPOSITORIES',
    partOfArray,
  };
}

export function sliceRepositories() {
  return (dispatch, getState) => {
    const { rowsCount, repositories, pageNumber } = getState();
    dispatch(
      slicedRepositories(
        repositories.slice(pageNumber * rowsCount, rowsCount * (pageNumber + 1))
      )
    );
  };
}

export function getSlicedData() {
  return (dispatch, getState) => {
    if (!getState().repositoryName) {
      return;
    }
    dispatch(repositoriesFetchData()).then(() =>
      dispatch(sliceRepositories(getState().pageNumber))
    );
  };
}
