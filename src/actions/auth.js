import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SET_MESSAGE,
} from './types';

import { register, login, logout } from '../services/auth.service';

export const register = (username, email, password) => (dispatch) => {
  return register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_ERROR
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  )
}

export const login = (username, password) => (dispatch) => {
  return login(username, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response }
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

      dispatch({
        type: LOGIN_ERROR
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  )
}

export const logout = () => (dispatch) => {
  logout();

  dispatch({
    type: LOGOUT
  });
}
