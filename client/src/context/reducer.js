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
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_SUCCESS,
  TOGGLE_SIDEBAR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CLEAR_FILTERS,
  CHANGE_STATUS,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_FLAG,
  SELECT_TAG,
  DELETE_ARTICLE_BEGIN,
  DELETE_ARTICLE_SUCCESS,
  TOGGLE_FLAG_BEGIN,
  TOGGLE_FLAG_SUCCESS,
  TOGGLE_PUBLISH_BEGIN,
  TOGGLE_PUBLISH_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      if (action.payload && action.payload.customMessage) {
        return {
          ...state,
          showAlert: true,
          alertText: action.payload.customMessage,
        };
      }

      return {
        ...state,
        showAlert: true,
        alertType: "danger",
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
        isLoading: false,
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
        isLoading: false,
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

    case UPDATE_USER_BEGIN:
      return { ...state, isLoading: true };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        alertType: "success",
        alertText: "User Profile Updated!",
      };

    case UPDATE_USER_ERROR:
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

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };

    case GET_ARTICLES_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload.articles,
        stats: action.payload.stats,
        totalArticles: action.payload.totalArticles,
        count: action.payload.count,
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case CLEAR_VALUES:
      const initialState = {
        isEditing: false,
      };
      return {
        ...state,
        ...initialState,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        search: "",
        searchStatus: "all",
        searchType: "all",
        sort: "by category",
      };

    case CHANGE_STATUS:
      if (action.payload.newStatus === state.searchStatus) {
        return {
          ...state,
          searchStatus: "all",
          searchFlag: false,
        };
      }
      return {
        ...state,
        searchStatus: action.payload.newStatus,
        searchFlag: false,
      };

    case CHANGE_SEARCH_FLAG:
      if (!state.searchFlag) {
        return {
          ...state,
          searchFlag: !state.searchFlag,
          searchStatus: "none",
        };
      }
      return {
        ...state,
        searchFlag: !state.searchFlag,
        searchStatus: "all",
      };

    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload.newType,
      };

    case SELECT_TAG:
      return {
        ...state,
        searchType: "tag",
        search: action.payload.tag,
      };

    case DELETE_ARTICLE_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alertType: "success",
        alertText: "Article Deleted!",
      };

    case TOGGLE_FLAG_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case TOGGLE_FLAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alertType: "success",
      };

    default:
      return;
  }
};

export default reducer;
