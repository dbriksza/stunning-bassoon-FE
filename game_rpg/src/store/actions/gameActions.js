import { axiosWithAuth } from "../axiosWithAuth";

// below actions might deprecate
export const GET_BOARD_START = "GET_BOARD_START";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";

export const JOIN_GAME_START = "JOIN_GAME_START"
export const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS"

export const START_GAME_START = "START_GAME_START"
export const START_GAME_SUCCESS = "START_GAME_SUCCESS"

export const ROLL_DIE_START = "ROLL_DIE_START"
export const ROLL_DIE_SUCCESS = "ROLL_DIE_SUCCESS"

export const MOVE_PLAYER_START = "MOVE_PLAYER_START"
export const MOVE_PLAYER_SUCCESS = "MOVE_PLAYER_SUCCESS"

export const LEAVE_GAME_START = "LEAVE_GAME_START"
export const LEAVE_GAME_SUCCESS = "LEAVE_GAME_SUCCESS"

export const GAME_FAIL = "GAME_ERROR";


export const getGame = () => dispatch => {
  dispatch({ type: GET_BOARD_START });
  axiosWithAuth()
    .get(`/get_game`)
    .then(res => {
      dispatch({ type: GET_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

export const joinGame = () => dispatch => {
  dispatch({ type: JOIN_GAME_START });
  axiosWithAuth()
    .get(`/join`)
    .then(res => {
      dispatch({ type: JOIN_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

export const startGame = () => dispatch => {
  dispatch({ type: START_GAME_START });
  axiosWithAuth()
    .get(`/join`)
    .then(res => {
      dispatch({ type: START_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

export const rollDie = () => dispatch => {
  dispatch({ type: ROLL_DIE_START });
  axiosWithAuth()
    .get(`/roll`)
    .then(res => {
      dispatch({ type: ROLL_DIE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

export const movePlayer = direction => dispatch => {
  dispatch({ type: MOVE_PLAYER_START });
  axiosWithAuth()
    .post(`/roll`, {direction: direction})
    .then(res => {
      dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

export const leaveGame = () => dispatch => {
  dispatch({ type: LEAVE_GAME_START });
  axiosWithAuth()
    .get(`/leave`)
    .then(res => {
      dispatch({ type: LEAVE_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};