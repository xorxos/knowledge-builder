import { initialState } from "./appContext";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      if (action.payload && action.payload.customMessage) {
        return {
          ...state,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.customMessage,
        };
      }

      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    case REGISTER_USER_BEGIN:
      return { ...state, isLoading: true };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoaing: false,
        user: action.payload.user,
        token: action.payload.token,
        showAlert: true,
        alertType: "success",
        alertText: "User Created! Redirecting...",
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case LOGIN_USER_BEGIN:
      return { ...state, isLoading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoaing: false,
        user: action.payload.user,
        token: action.payload.token,
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful! Redirecting...",
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
      };
    default:
      return;
  }
};

export default reducer;
