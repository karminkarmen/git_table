import _ from 'lodash';
import { setRepositoriesData } from './repositories';
import { sliceRepositories } from './pagination';

export function sortColumnName(columnName) {
  return {
    type: 'SORT_COLUMN_NAME',
    columnName,
  };
}

export function sortDirection(direction) {
  return {
    type: 'SORT_DIRECTION',
    direction,
  };
}

export function handleSort(clickedColumnName, direction) {
  return (dispatch, getState) => {
    const columnName = getState().column;
    const repositories = getState().repositories;

    if (columnName !== clickedColumnName) {
      dispatch(sortColumnName(clickedColumnName));
      dispatch(
        setRepositoriesData(
          _.sortBy(repositories, repo => {
            let value = _.get(repo, clickedColumnName);
            if (typeof value === 'string') {
              value = value.toLowerCase();
            }
            return value;
          })
        )
      );
      dispatch(sortDirection('ascending'));
      dispatch(sliceRepositories(getState().pageNumber));
      return;
    }

    dispatch(setRepositoriesData(repositories.reverse()));
    dispatch(
      sortDirection(direction === 'ascending' ? 'descending' : 'ascending')
    );
    dispatch(sliceRepositories(getState().pageNumber));
  };
}
