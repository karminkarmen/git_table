export function repositoryName(
  state = window.localStorage.getItem('LAST_REPO_NAME') || '',
  action
) {
  switch (action.type) {
    case 'SET_REPOSITORY_NAME':
      return action.repositoryName;
    default:
      return state;
  }
}
