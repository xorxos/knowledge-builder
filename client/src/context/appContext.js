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
  CHANGE_SEARCH_TYPE,
  CLEAR_VALUES,
  CLEAR_FILTERS,
  CHANGE_STATUS,
  CHANGE_SEARCH_FLAG,
  SELECT_TAG,
  DELETE_ARTICLE_BEGIN,
  DELETE_ARTICLE_SUCCESS,
  TOGGLE_FLAG_BEGIN,
  TOGGLE_FLAG_SUCCESS,
  TOGGLE_PUBLISH_BEGIN,
  TOGGLE_PUBLISH_SUCCESS,
  SET_EDIT_ARTICLE,
  EDIT_ARTICLE_BEGIN,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR,
  CREATE_ARTICLE_BEGIN,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "danger",
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: false,
  isEditing: false,
  editArticleId: "",
  article: {},
  articleModuleOptions: [
    "header",
    "subheader",
    "paragraph",
    "bullets list",
    "numbered list",
    "code block",
    "image",
    "alert",
  ],
  articleModuleType: "header",
  statusOptions: ["unpublished", "published"],
  status: "unpublished",
  articles: [],
  totalArticles: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  search: "",
  searchCount: 0,
  searchFlag: false,
  searchStatus: "all",
  searchTypeOptions: ["title", "tag"],
  searchType: "title",
  sort: "category",
  sortOptions: ["latest", "oldest", "tag", "category", "a-z", "z-a"],
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

  const displayAlert = (customMessage, type) => {
    if (customMessage && type) {
      dispatch({ type: DISPLAY_ALERT, payload: { customMessage, type } });
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
    const { page, search, searchStatus, searchType, searchFlag } = state;

    let url = `/articles?page=${page}&searchType=${searchType}`;

    if (searchStatus !== "none") {
      url = url + `&status=${searchStatus}`;
    }

    if (search) {
      url = url + `&search=${search}`;
    }

    if (searchFlag) {
      url = url + `&flagged=true`;
    }

    dispatch({ type: GET_ARTICLES_BEGIN });

    try {
      const { data } = await authFetch.get(url);
      const { articles, stats, totalArticles, count, numOfPages } = data;
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        payload: {
          articles,
          stats,
          count,
          totalArticles,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const createArticle = async (title) => {
    dispatch({ type: CREATE_ARTICLE_BEGIN });

    try {
      const { data } = await authFetch.post("/articles", {
        title,
      });
      const { article } = data;
      dispatch({
        type: CREATE_ARTICLE_SUCCESS,
        payload: { id: article._id, article },
      });
      displayAlert("Article Created!", "success");
    } catch (error) {
      dispatch({ type: CREATE_ARTICLE_ERROR });
    }
  };

  const editArticle = async ({ article }) => {
    console.log("before");
    console.log(article);
    dispatch({ type: EDIT_ARTICLE_BEGIN });

    if (state.isEditing) {
      try {
        const { data } = await authFetch.patch(
          `/articles/${state.editArticleId}`,
          {
            title: article.title,
            modules: article.modules,
            status: article.status,
            flagged: article.flagged,
            tags: article.tags,
          }
        );
        const { updatedArticle } = data;
        console.log("after");
        console.log(updatedArticle);
        dispatch({
          type: EDIT_ARTICLE_SUCCESS,
          payload: { updatedArticle },
        });
        displayAlert();
      } catch (error) {
        console.log(error);
        dispatch({
          type: EDIT_ARTICLE_ERROR,
          payload: { msg: error.response.msg },
        });
      }
    }
  };

  const deleteArticle = async (articleId) => {
    dispatch({ type: DELETE_ARTICLE_BEGIN });

    try {
      await authFetch.delete(`/articles/${articleId}`);
      dispatch({
        type: DELETE_ARTICLE_SUCCESS,
      });
      displayAlert();
      getArticles();
    } catch (error) {
      logoutUser();
      clearAlert();
    }
  };

  const toggleFlag = async (articleId, flag) => {
    dispatch({ type: TOGGLE_FLAG_BEGIN });

    try {
      await authFetch.patch(`/articles/${articleId}`, { flagged: !flag });
      dispatch({ type: TOGGLE_FLAG_SUCCESS });
      displayAlert("Changes Saved Successfully!", "success");
      getArticles();
    } catch (error) {
      logoutUser();
      clearAlert();
    }
  };

  const togglePublish = async (articleId, status) => {
    dispatch({ type: TOGGLE_PUBLISH_BEGIN });

    let newStatus;
    if (status === "published") {
      newStatus = "unpublished";
    } else {
      newStatus = "published";
    }

    try {
      await authFetch.patch(`/articles/${articleId}`, { status: newStatus });
      dispatch({ type: TOGGLE_PUBLISH_SUCCESS });
      displayAlert("Changes Saved Successfully!", "success");
      getArticles();
    } catch (error) {
      logoutUser();
      clearAlert();
    }
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

  const changeStatus = (newStatus) => {
    dispatch({ type: CHANGE_STATUS, payload: { newStatus } });
  };

  const changeSearchType = (newType) => {
    dispatch({ type: CHANGE_SEARCH_TYPE, payload: { newType } });
  };

  const changeSearchFlag = () => {
    dispatch({ type: CHANGE_SEARCH_FLAG });
  };

  const selectTag = (tag) => {
    dispatch({ type: SELECT_TAG, payload: { tag } });
  };

  const setEditArticle = (id) => {
    dispatch({ type: SET_EDIT_ARTICLE, payload: { id } });
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
        changeStatus,
        changeSearchType,
        changeSearchFlag,
        selectTag,
        deleteArticle,
        toggleFlag,
        togglePublish,
        setEditArticle,
        editArticle,
        createArticle,
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
