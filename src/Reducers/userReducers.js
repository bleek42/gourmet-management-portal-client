import { USER_SIGNUP_REQ, USER_SIGNUP_SUCCESS, USER_SIGNUP_ERR, USER_LOGIN_REQ, USER_LOGIN_SUCCESS, USER_LOGIN_ERR } from '../Constants/userConstants';

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQ:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_ERR:
      return { loading: false, error: true };
    default:
      return state;
  }
}