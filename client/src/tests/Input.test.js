import * as inputActions from '../actions/input';

describe('Input', () => {
  it('should create an action with passed repository name', () => {
    const repositoryName = 'react';
    const expectedAction = {
      type: 'SET_REPOSITORY_NAME',
      repositoryName,
    };
    expect(inputActions.setRepositoryName(repositoryName)).toEqual(
      expectedAction
    );
  });
});
