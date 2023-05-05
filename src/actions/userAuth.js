export const LOGOUT = 'LOGOUT';
export const SET_AUTHUSER = 'SET_AUTHUSER';

export const logout = () => ({
  type: LOGOUT,
});

export const setAuthUser = (id) => ({
  type: SET_AUTHUSER,
  id,
});

