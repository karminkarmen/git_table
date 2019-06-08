export function column(state = 'default', action) {
  switch (action.type) {
    case 'SORT_COLUMN_NAME':
      return action.columnName;
    default:
      return state;
  }
}

export function direction(state = 'ascending', action) {
  switch (action.type) {
    case 'SORT_DIRECTION':
      return action.direction;
    default:
      return state;
  }
}
