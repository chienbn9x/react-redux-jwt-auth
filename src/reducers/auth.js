import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    case REGISTER_ERROR:
      return {
        ...state,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}