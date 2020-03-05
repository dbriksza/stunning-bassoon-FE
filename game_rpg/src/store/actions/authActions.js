import axios from "axios";

const baseURL = "https://alans-app.herokuapp.com";

export const LOGIN = "LOGIN";
export const LOADING_USER = "LOADING_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOOUT = "LOGOOUT";
export const GET_USER = "GET_USER";
export const REGISER_ERROR = "REGISER_ERROR";
export const USER_ERROR = "USER_ERROR";

export const updateAction = (type, payload) => ({
  type,
  payload
});

export const doLogin = (user, history) => dispatch => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/login/`, user)
    .then(response => {
      const { key } = response.data;
      localStorage.setItem("token", key);
      history.push("/game");
    })
    .catch(error => {
      let errorMessage = error.response.data;
      dispatch(updateAction(LOGIN_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doRegister = (user, history) => dispatch => {
  dispatch(updateAction(LOADING_USER, true));
  axios
    .post(`${baseURL}/api/registration`, user)
    .then(response => {
      const { key } = response.data;
      localStorage.setItem("token", key);
      history.push("/game");
    })
    .catch(error => {
      let errorMessage = error.response.data;
      dispatch(updateAction(REGISER_ERROR, errorMessage));
    })
    .finally(() => dispatch(updateAction(LOADING_USER, false)));
};

export const doLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(updateAction(LOGOUT));
  window.location.reload();
};
