import { axiosWithAuth } from "../axiosWithAuth";

// uniform request start action
export const START_REQUEST = "START_REQUEST";

// PLAYER JOIN/LEAVE ACTION TYPES
// http
export const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS"
export const LEAVE_GAME_SUCCESS = "LEAVE_GAME_SUCCESS"
//pusher
export const PUSH_PLAYER_CHANGE = "PUSH_PLAYER_CHANGE"

// START GAME ACTION TYPES
// http
export const START_GAME_SUCCESS = "START_GAME_SUCCESS"
// pusher
export const PLAYER_START_GAME = "PLAYER_START_GAME"
export const BOARD_START_GAME = "BOARD_START_GAME"

// http requests
// GET_BOARD might deprecate
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";
export const ROLL_DIE_SUCCESS = "ROLL_DIE_SUCCESS"
export const MOVE_PLAYER_SUCCESS = "MOVE_PLAYER_SUCCESS"

// pusher board channel
export const BOARD_UPDATE_WORLD = "BOARD_UPDATE_WORLD"
export const BOARD_END_GAME = "BOARD_END_GAME"

// pusher player channel
export const PLAYER_UPDATE_WORLD = "PLAYER_START_GAME"
export const BOARD_UPDATE = "BOARD_UPDATE"

// uniform error handling action
export const GAME_FAIL = "GAME_ERROR";


export const getGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/get_game`)
    .then(res => {
      dispatch({ type: GET_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

// PLAYER JOIN/LEAVE ACTION CREATORS
// http
export const joinGame = () => dispatch => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/join`)
    .then(res => {
      dispatch({ type: JOIN_GAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
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
      dispatch({ type: GAME_FAIL, payload: err })
    });
};

// pusher
export const pushPlayerChange = (data) => dispatch => {
  dispatch({ type: PUSH_PLAYER_CHANGE, payload: data });
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
      dispatch({ type: GAME_FAIL, payload: err })
    });
};
// pusher player channel
export const pushPlayerStart = (data) => dispatch => {
  dispatch({ type: PLAYER_START_GAME, payload: data })
}
// pusher board channel
export const pushBoardStart = (data) => dispatch => {
  dispatch({ type: BOARD_START_GAME, payload: data })
}


// PLAYER GAME ACTIONS
// http
export const rollDie = () => dispatch => {
  dispatch({ type: START_REQUEST });
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
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .post(`/roll`, {direction: direction})
    .then(res => {
      dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err })
    });
};