import { axiosWithAuth } from "../axiosWithAuth";

// uniform http request start action and error handler
export const START_REQUEST = "START_REQUEST";
export const GAME_FAIL = "GAME_ERROR";

// PLAYER ACTION TYPES
// http
export const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS";
export const LEAVE_GAME_SUCCESS = "LEAVE_GAME_SUCCESS";
export const ROLL_DIE_SUCCESS = "ROLL_DIE_SUCCESS";
export const MOVE_PLAYER_SUCCESS = "MOVE_PLAYER_SUCCESS";
//pusher
export const PUSH_PLAYER_CHANGE = "PUSH_PLAYER_CHANGE";
export const PUSH_BOARD_CHANGE = "PUSH_BOARD_CHANGE";

// START GAME ACTION TYPES
// http
export const START_GAME_SUCCESS = "START_GAME_SUCCESS";
// pusher
export const PLAYER_START_GAME = "PLAYER_START_GAME";
export const BOARD_START_GAME = "BOARD_START_GAME";

// END GAME ACTION TYPES

// http requests
// GET_BOARD might deprecate
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";

export const getGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/get_game`)
    .then(res => {
      dispatch({ type: GET_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};

// PLAYER ACTION CREATORS
// http
export const joinGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/join`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: JOIN_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};

export const leaveGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/leave`)
    .then(res => {
      dispatch({ type: LEAVE_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};

export const rollDie = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/roll`)
    .then(res => {
      dispatch({ type: ROLL_DIE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};

export const movePlayer = direction => dispatch => {
  const reqBody = { direction: direction };
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .post(`/move`, reqBody)
    .then(res => {
      dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};
// pusher player channel has one generic action for all changes (join, leave, move, score)
export const pushPlayerChange = data => dispatch => {
  dispatch({ type: PUSH_PLAYER_CHANGE, payload: data });
};
// pusher board channel for updates to board when player moves or takes points
export const pushBoardChange = data => dispatch => {
  dispatch({ type: PUSH_BOARD_CHANGE, payload: data });
};

// START ACTIONS
// http
export const startGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/join`)
    .then(res => {
      dispatch({ type: START_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};
// pusher player channel
export const pushPlayerStart = data => dispatch => {
  dispatch({ type: PLAYER_START_GAME, payload: data });
};
// pusher board channel
export const pushBoardStart = data => dispatch => {
  dispatch({ type: BOARD_START_GAME, payload: data });
};
