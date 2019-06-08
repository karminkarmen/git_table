export function repositoriesHasErrored(state = false, action) {
  switch (action.type) {
    case 'REPOSITORIES_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function repositoriesIsLoading(state = false, action) {
  switch (action.type) {
    case 'REPOSITORIES_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function repositories(state = [], action) {
  switch (action.type) {
    case 'SET_REPOSITOIRES_DATA':
      return action.repositories;
    default:
      return state;
  }
}
