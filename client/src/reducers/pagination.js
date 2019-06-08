export function rowsCount(state = 5, action) {
  switch (action.type) {
    case 'ROWS_COUNT':
      return action.countNumber;
    default:
      return state;
  }
}

export function pageNumber(state = 0, action) {
  switch (action.type) {
    case 'PAGE_NUMBER':
      return action.number;
    default:
      return state;
  }
}

export function slicedRepositories(state = [], action) {
  switch (action.type) {
    case 'SLICED_REPOSITORIES':
      return action.partOfArray;
    default:
      return state;
  }
}
