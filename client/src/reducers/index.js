import { combineReducers } from 'redux';
import {
  repositories,
  repositoriesHasErrored,
  repositoriesIsLoading,
} from './repositories';
import { repositoryName } from './input';
import { column, direction } from './table';
import { rowsCount, pageNumber, slicedRepositories } from './pagination';
import { userName, userDataHasErrored, userDataDataIsLoading } from './user';

export default combineReducers({
  repositories,
  repositoriesHasErrored,
  repositoriesIsLoading,
  repositoryName,
  direction,
  column,
  rowsCount,
  pageNumber,
  slicedRepositories,
  userName,
  userDataHasErrored,
  userDataDataIsLoading,
});
