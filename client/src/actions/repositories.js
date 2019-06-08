import { ENDPOINT as API_ENDPOINT } from '../configs/githubApiConstants';
import { isCached, setCached, getCached } from '../services/cache';
import { sortColumnName } from './table';

export function repositoriesHasErrored(bool) {
  return {
    type: 'REPOSITORIES_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function repositoriesIsLoading(bool) {
  return {
    type: 'REPOSITORIES_IS_LOADING',
    isLoading: bool,
  };
}

export function setRepositoriesData(repositories) {
  return {
    type: 'SET_REPOSITOIRES_DATA',
    repositories,
  };
}

export function repositoriesFetchData() {
  return (dispatch, getState) => {
    const repositoryName = getState().repositoryName;

    if (!repositoryName) {
      return;
    }

    dispatch(sortColumnName(''));

    window.localStorage.setItem('LAST_REPO_NAME', repositoryName);

    if (isCached(repositoryName)) {
      return new Promise(resolve => {
        const repositoriesData = getCached(repositoryName);
        dispatch(setRepositoriesData(repositoriesData.items));
        resolve();
      });
    } else {
      dispatch(repositoriesIsLoading(true));
      return fetch(`${API_ENDPOINT}search/repositories?q=${repositoryName}`)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(repositoriesIsLoading(false));
          return response;
        })
        .then(response => response.json())
        .then(repositoriesData => {
          setCached(repositoryName, repositoriesData);
          dispatch(setRepositoriesData(repositoriesData.items));
        })
        .catch(e => {
          dispatch(repositoriesHasErrored(true));
        });
    }
  };
}
