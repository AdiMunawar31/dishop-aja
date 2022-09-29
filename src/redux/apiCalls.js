import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from './userRedux';
import { publicRequest } from '../helpers/requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, refreshToken) => {
  console.log(JSON.stringify(refreshToken));
  dispatch(logoutStart());
  try {
    const res = await publicRequest.post('/auth/logout', refreshToken);
    dispatch(logoutSuccess(res.data.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};
