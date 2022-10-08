import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: false,
  isEditing: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (customMessage) => {
    if (customMessage) {
      dispatch({ type: DISPLAY_ALERT, payload: { customMessage } });
      clearAlert();
      return;
    }

    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = data;

      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });

      addUserToLocalStorage({user, token});
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR, msg: error.response.data.msg });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;

      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });

      addUserToLocalStorage({user, token});
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR, msg: error.response.data.msg });
    }
    clearAlert();
  };

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({type: LOGOUT_USER})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

const useScrollToAlert = () => {
  const { showAlert } = useAppContext();
  return useEffect(() => {
    if (showAlert) {
      const scrollToAlert = () => {
        let scroll_to = document.getElementById("alert").offsetTop;
        scroll_to = scroll_to - 30;
        window.scrollTo({ behavior: "smooth", top: scroll_to });
      };
      scrollToAlert();
    }
  }, [showAlert]);
};

export { AppProvider, initialState, useAppContext, useScrollToAlert };
