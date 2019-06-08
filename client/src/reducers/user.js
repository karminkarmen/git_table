export function userDataHasErrored(state = false, action) {
  switch (action.type) {
    case 'USER_DATA_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function userDataDataIsLoading(state = false, action) {
  switch (action.type) {
    case 'USER_DATA_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function userName(state = '', action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return action.userName;
    default:
      return state;
  }
}
