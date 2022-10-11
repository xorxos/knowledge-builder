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
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_SUCCESS,
  TOGGLE_SIDEBAR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CLEAR_FILTERS,
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
  editArticleId: "",
  articleModuleOptions: [
    "header",
    "subheader",
    "paragraph",
    "bullets list",
    "numbered list",
    "code block",
    "image",
    "text-image split",
    "alert",
  ],
  articleModuleType: "header",
  statusOptions: ["unpublished", "published", "flagged"],
  status: "unpublished",
  articles: [],
  totalArticles: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  search: "",
  searchStatus: "all",
  searchTypeOptions: ["title", "tag", "category"],
  searchType: "all",
  sort: "by category",
  sortOptions: ["latest", "oldest", "by tag", "by category", "a-z", "z-a"],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // axios request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //axios response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

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

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
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

      addUserToLocalStorage({ user, token });
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

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR, msg: error.response.data.msg });
    }
    clearAlert();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

      const { user, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
        clearAlert();
      }
    }
    clearAlert();
  };

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({ type: LOGOUT_USER });
  };

  const getArticles = async () => {
    dispatch({ type: GET_ARTICLES_BEGIN });

    try {
      const { data } = await authFetch.get("/articles");
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        payload: {
          articles: data.articles,
          stats: data.stats,
          count: data.count,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const handleChange = ({ value, name }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        getArticles,
        toggleSidebar,
        handleChange,
        clearValues,
        clearFilters,
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

  useEffect(() => {
    if (showAlert) {
      let scroll_to = document.getElementById("alert").offsetTop - 30;
      window.scrollTo({ behavior: "smooth", top: scroll_to });
    }
  }, [showAlert]);
};

export { AppProvider, initialState, useAppContext, useScrollToAlert };
