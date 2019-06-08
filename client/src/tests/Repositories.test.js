import * as repositoriesActions from '../actions/repositories';
import * as Cache from '../services/cache';

describe('Repositories', () => {
  it('if has error should return an error', () => {
    const hasErrored = true;
    const expectedAction = {
      type: 'REPOSITORIES_HAS_ERRORED',
      hasErrored,
    };
    expect(repositoriesActions.repositoriesHasErrored(hasErrored)).toEqual(
      expectedAction
    );
  });

  it('if has not error should not return an error', () => {
    const hasErrored = false;
    const expectedAction = {
      type: 'REPOSITORIES_HAS_ERRORED',
      hasErrored,
    };
    expect(repositoriesActions.repositoriesHasErrored(hasErrored)).toEqual(
      expectedAction
    );
  });

  it('return form repositoriesFetchData when repositoryName is not defined', () => {
    const getState = () => ({ repositoryName: undefined });
    const dispatch = jest.fn();
    const repositories = repositoriesActions.repositoriesFetchData()(
      dispatch,
      getState
    );
    expect(repositories).toBeUndefined();
  });

  it('return form repositoriesFetchData when repositoryName is defined and API failed', async () => {
    const getState = () => ({ repositoryName: 'repository' });
    const dispatch = jest.fn();
    fetch = () =>
      new Promise(resolve => {
        resolve({ ok: false });
      });
    await repositoriesActions.repositoriesFetchData()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      isLoading: true,
      type: 'REPOSITORIES_IS_LOADING',
    });
    expect(dispatch).toHaveBeenCalledWith({
      columnName: '',
      type: 'SORT_COLUMN_NAME',
    });
    expect(dispatch).toHaveBeenCalledWith({
      hasErrored: true,
      type: 'REPOSITORIES_HAS_ERRORED',
    });
  });

  it('return form repositoriesFetchData when repositoryName is defined and API is connected', async () => {
    const getState = () => ({ repositoryName: 'repository' });
    const dispatch = jest.fn();
    fetch = () =>
      new Promise(resolve => {
        resolve({
          ok: true,
          json: () => ({ items: [] }),
        });
      });
    await repositoriesActions.repositoriesFetchData()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      isLoading: true,
      type: 'REPOSITORIES_IS_LOADING',
    });
    expect(dispatch).toHaveBeenCalledWith({
      columnName: '',
      type: 'SORT_COLUMN_NAME',
    });
    expect(dispatch).toHaveBeenCalledWith({
      repositories: [],
      type: 'SET_REPOSITOIRES_DATA',
    });
  });

  it('return form repositoriesFetchData when repositoryName is defined and content cached', async () => {
    const getState = () => ({ repositoryName: 'repository' });
    const dispatch = jest.fn();
    Cache.isCached = jest.fn(() => true);
    Cache.getCached = jest.fn(() => ({ items: [] }));

    await repositoriesActions.repositoriesFetchData()(dispatch, getState);

    expect(Cache.isCached.mock.calls.length).toBe(1);
    expect(Cache.getCached.mock.calls.length).toBe(1);
    expect(dispatch).toHaveBeenCalledWith({
      repositories: [],
      type: 'SET_REPOSITOIRES_DATA',
    });
  });
});
