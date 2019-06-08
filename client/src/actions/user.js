import {
  ACCESS_TOKEN_ENDPOINT,
  USER_ENDPOINT,
} from '../configs/githubApiConstants';
import { extractCodeFromUrl, stripQueryString } from '../helpers/url';
import { createBrowserHistory } from 'history';

export function userDataHasErrored(bool) {
  return {
    type: 'USER_DATA_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function userDataDataIsLoading(bool) {
  return {
    type: 'USER_DATA_IS_LOADING',
    isLoading: bool,
  };
}

export function setUserName(userName) {
  return {
    type: 'SET_USER_NAME',
    userName,
  };
}

const getLoggedUserName = (accessToken, tokenType) => {
  return dispatch => {
    return fetch(USER_ENDPOINT, {
      headers: { Authorization: `${tokenType} ${accessToken}` },
    })
      .then(response => {
        if (!response.ok) {
          dispatch(userDataHasErrored(true));
          throw new Error('User is not authorized');
        }
        dispatch(userDataDataIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(userData => {
        dispatch(setUserName(userData.login));
      });
  };
};

export function fetchLoggedUserName(location) {
  return dispatch => {
    const code = extractCodeFromUrl(location.href);

    if (!code) {
      return;
    }

    dispatch(userDataDataIsLoading(true));
    return fetch(ACCESS_TOKEN_ENDPOINT + code, { Accept: 'application/json' })
      .then(response => response.json())
      .catch(e => {
        dispatch(userDataHasErrored(true));
      })
      .then(accessTokenData => {
        const accessToken = accessTokenData.access_token;
        const tokenType = accessTokenData.token_type;
        window.localStorage.setItem('ACCESS_TOKEN', accessToken);
        window.localStorage.setItem('TOKEN_TYPE', tokenType);
        dispatch(getLoggedUserName(accessToken, tokenType));
      })
      .finally(() => {
        createBrowserHistory().replace(stripQueryString(location.pathname));
      });
  };
}
